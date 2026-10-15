#!/usr/bin/env python3
"""
Genera las ilustraciones de los cuentos con la API gratuita de Pollinations.ai.

Lee los prompts de docs/PROMPTS-ILUSTRACIONES.md (biblia de estilo + franja de edad +
prompt del cuento + «Avoid»), descarga una imagen por cuento y la guarda en
public/cuentos/<id>.webp, sobrescribiendo la anterior si existe. Al terminar actualiza
src/domain/story-art.ts con la lista de cuentos que tienen ilustración, para que la web
la use (los que no tienen siguen mostrando el dibujo SVG).

Uso:
  python3 scripts/generate_story_images.py                 # todos los que falten
  python3 scripts/generate_story_images.py --force         # regenerar todos
  python3 scripts/generate_story_images.py --only pez-burbuja,el-faro
  python3 scripts/generate_story_images.py --dry-run       # sólo muestra los prompts

Requiere Python 3.9+ y Pillow (pip install pillow). Sin otras dependencias.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROMPTS_MD = ROOT / "docs" / "PROMPTS-ILUSTRACIONES.md"
OUT_DIR = ROOT / "public" / "cuentos"
MANIFEST = ROOT / "src" / "domain" / "story-art.ts"

API = "https://image.pollinations.ai/prompt/"
WIDTH, HEIGHT = 1600, 900  # 16:9
MAX_PROMPT_CHARS = 2000  # las URL muy largas fallan: se recorta la parte menos importante

# Versiones compactas de la biblia de estilo y del «Avoid» para que entren en la URL junto al
# prompt completo del cuento (el documento tiene la versión larga, para generadores sin límite).
BIBLE_SHORT = (
    "Therapeutic children's storybook series, hand-painted digital concept art, soft gouache and watercolor texture, "
    "rounded friendly shapes, simple expressive faces, natural proportions, diverse characters, cinematic but tender lighting, "
    "16:9 widescreen, clear focal point, depth layers, no text, no letters, no logos, no watermark."
)
AVOID_SHORT = (
    "Avoid: text, watermark, scary or horror elements, blood, injuries, depicted death, distorted hands, extra limbs, "
    "creepy eyes, revealing clothing, photorealism, 3D plastic look."
)
AGE_LINES = {
    "0-6": "Age 0-6 style: very simple shapes, chunky silhouettes, soft pastel palette, high readability at small size, cozy and playful.",
    "7-12": "Age 7-12 style: richer environments and storytelling details, slightly more naturalistic proportions, painterly depth.",
    "13-17": "Age 13-17 style: mature cinematic concept art, matte-painting atmosphere, subtle realism, introspective mood, film-still framing.",
}


def code_block_after(text: str, heading_regex: str) -> str:
    m = re.search(heading_regex + r".*?```\n(.*?)```", text, re.S)
    if not m:
        raise SystemExit(f"No encontré el bloque de «{heading_regex}» en {PROMPTS_MD}")
    return m.group(1).strip()


def parse_prompts() -> tuple[str, str, list[tuple[str, str, str]]]:
    """Devuelve (biblia, avoid, [(id, franja_más_baja, prompt)])."""
    text = PROMPTS_MD.read_text(encoding="utf-8")
    bible = code_block_after(text, r"## Series bible")
    avoid = code_block_after(text, r"## Avoid")
    stories = []
    for m in re.finditer(r"^### ([a-z0-9-]+) · .*?\(([\d–\-]+)\)\s*\n```\n(.*?)```", text, re.S | re.M):
        sid, bands, prompt = m.group(1), m.group(2).replace("–", "-"), m.group(3).strip()
        low = int(bands.split("-")[0])
        age = "0-6" if low <= 4 else "7-12" if low <= 10 else "13-17"
        stories.append((sid, age, prompt))
    if not stories:
        raise SystemExit("No encontré prompts de cuentos en el documento.")
    return bible, avoid, stories


def one_line(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def build_prompt(bible: str, age: str, story: str, avoid: str) -> str:
    # Orden de importancia: escena del cuento > estilo de la colección > edad > qué evitar.
    # La biblia larga se usa sólo si entra; si no, la compacta (mismo estilo, menos palabras).
    head = f"{BIBLE_SHORT} {AGE_LINES[age]}"
    tail = AVOID_SHORT
    long_version = f"{one_line(bible)} {AGE_LINES[age]} {one_line(story)} Avoid: {one_line(avoid)}"
    if len(long_version) <= MAX_PROMPT_CHARS:
        return long_version
    room = MAX_PROMPT_CHARS - len(head) - len(tail) - 2
    return f"{head} {one_line(story)[:room]} {tail}"


def seed_for(sid: str) -> int:
    # Semilla fija por cuento: la misma ejecución da la misma imagen.
    return int(hashlib.sha256(sid.encode()).hexdigest()[:8], 16) % 1_000_000


def fetch(prompt: str, seed: int, retries: int = 4) -> bytes:
    query = urllib.parse.urlencode({"width": WIDTH, "height": HEIGHT, "seed": seed, "nologo": "true", "model": "flux", "enhance": "false"})
    url = API + urllib.parse.quote(prompt, safe="") + "?" + query
    delay = 8
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "habilidades-psicologicas/1.0"})
            with urllib.request.urlopen(req, timeout=180) as res:
                data = res.read()
                ctype = res.headers.get("Content-Type", "")
            if not ctype.startswith("image/") or len(data) < 10_000:
                raise RuntimeError(f"respuesta inesperada ({ctype}, {len(data)} bytes)")
            return data
        except (urllib.error.URLError, RuntimeError, TimeoutError) as e:
            if attempt == retries:
                raise
            print(f"    intento {attempt} falló ({e}); reintento en {delay} s", flush=True)
            time.sleep(delay)
            delay *= 2
    raise RuntimeError("sin respuesta")


def save_webp(data: bytes, path: Path) -> int:
    from PIL import Image  # import tardío: --dry-run no necesita Pillow

    img = Image.open(io.BytesIO(data)).convert("RGB")
    if img.size != (WIDTH, HEIGHT):
        # Recorte centrado a 16:9 y escala exacta.
        w, h = img.size
        target = WIDTH / HEIGHT
        if w / h > target:
            nw = int(h * target)
            img = img.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
        else:
            nh = int(w / target)
            img = img.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
        img = img.resize((WIDTH, HEIGHT), Image.LANCZOS)
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp.webp")
    img.save(tmp, "WEBP", quality=80, method=6)
    tmp.replace(path)  # se sobrescribe de una vez: nunca queda un archivo a medias
    return path.stat().st_size


def write_manifest(all_ids: list[str]) -> list[str]:
    have = [sid for sid in all_ids if (OUT_DIR / f"{sid}.webp").exists()]
    body = "".join(f"  '{sid}',\n" for sid in have)
    MANIFEST.write_text(
        "/**\n"
        " * Cuentos con ilustración generada (public/cuentos/<id>.webp).\n"
        " * Archivo generado por scripts/generate_story_images.py: no editar a mano.\n"
        " * Los cuentos que no están aquí muestran el dibujo SVG con su elenco.\n"
        " */\n"
        f"export const STORY_ART: ReadonlySet<string> = new Set([\n{body}]);\n",
        encoding="utf-8",
    )
    return have


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--only", help="ids separados por coma")
    ap.add_argument("--force", action="store_true", help="regenerar aunque la imagen ya exista")
    ap.add_argument("--dry-run", action="store_true", help="mostrar los prompts sin descargar")
    ap.add_argument("--pause", type=float, default=16, help="segundos entre pedidos (el plan gratuito limita la frecuencia)")
    args = ap.parse_args()

    bible, avoid, stories = parse_prompts()
    all_ids = [s[0] for s in stories]
    if args.only:
        wanted = {x.strip() for x in args.only.split(",") if x.strip()}
        unknown = wanted - set(all_ids)
        if unknown:
            print(f"Ids desconocidos: {', '.join(sorted(unknown))}", file=sys.stderr)
            return 2
        stories = [s for s in stories if s[0] in wanted]

    ok, failed = 0, []
    for i, (sid, age, story) in enumerate(stories, 1):
        out = OUT_DIR / f"{sid}.webp"
        prompt = build_prompt(bible, age, story, avoid)
        if args.dry_run:
            print(f"\n[{sid}] ({len(prompt)} caracteres)\n{prompt}")
            continue
        if out.exists() and not args.force:
            print(f"[{i}/{len(stories)}] {sid}: ya existe, se saltea (usa --force para regenerar)")
            continue
        print(f"[{i}/{len(stories)}] {sid}: generando…", flush=True)
        try:
            size = save_webp(fetch(prompt, seed_for(sid)), out)
            print(f"    guardada {out.relative_to(ROOT)} ({size // 1024} KB)")
            ok += 1
        except Exception as e:  # noqa: BLE001 — se informa y se sigue con el resto
            print(f"    ERROR: {e}", file=sys.stderr)
            failed.append(sid)
        if i < len(stories):
            time.sleep(args.pause)

    if not args.dry_run:
        have = write_manifest(all_ids)
        print(f"\nListo: {ok} nuevas, {len(have)} de {len(all_ids)} cuentos con ilustración.")
        if failed:
            print(f"Fallaron: {', '.join(failed)}. Vuelve a ejecutar el script para reintentarlos.", file=sys.stderr)
            return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
