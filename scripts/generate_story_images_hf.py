#!/usr/bin/env python3
"""
Genera las ilustraciones de los cuentos con la Inference API de Hugging Face
(Stable Diffusion XL) y sobrescribe public/cuentos/<id>.webp.

Usa los prompts de docs/PROMPTS-ILUSTRACIONES.md, compactados para SDXL (su codificador
de texto lee unas 75 palabras): escena principal + estilo según la edad del lector +
paleta + calidad. El prompt negativo va aparte. Al terminar actualiza
src/domain/story-art.ts, así la web muestra las imágenes sin tocar el código.

El token NUNCA va en el código: se lee de la variable de entorno HF_TOKEN.

  export HF_TOKEN=hf_xxx            # (en GitHub: secreto HF_TOKEN)
  python3 scripts/generate_story_images_hf.py               # las que falten
  python3 scripts/generate_story_images_hf.py --force       # regenerar todas
  python3 scripts/generate_story_images_hf.py --only pez-burbuja,el-faro
  python3 scripts/generate_story_images_hf.py --dry-run     # sólo ver los prompts

Requiere Python 3.9+ y Pillow (pip install pillow).
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_story_images import OUT_DIR, ROOT, parse_prompts, save_webp, seed_for, write_manifest  # noqa: E402

MODEL = os.environ.get("HF_MODEL", "stabilityai/stable-diffusion-xl-base-1.0")
ENDPOINT = f"https://router.huggingface.co/hf-inference/models/{MODEL}"
WIDTH, HEIGHT = 1344, 768  # resolución nativa de SDXL cercana a 16:9; luego se lleva a 1600×900

STYLE = {
    "0-6": "children's picture book illustration, digital art, soft gouache texture, rounded cute shapes, pastel colors, cozy and gentle",
    "7-12": "storybook digital painting, highly detailed, painterly concept art, warm storytelling atmosphere",
    "13-17": "cinematic digital concept art, highly detailed matte painting, film still, introspective mood",
}
QUALITY = "cinematic lighting, soft rim light, volumetric light, masterpiece, best quality, sharp focus, 16:9 composition"
NEGATIVE = (
    "text, letters, words, watermark, signature, logo, frame, border, blurry, lowres, jpeg artifacts, "
    "deformed, distorted face, bad anatomy, extra fingers, extra limbs, mutated hands, creepy, scary, horror, "
    "gore, blood, injury, dead body, nudity, revealing clothes, photorealistic photo, 3d render, oversaturated"
)


def field(block: str, name: str) -> str:
    m = re.search(rf"^{name}:\s*(.+)$", block, re.M)
    return m.group(1).strip() if m else ""


def compact_prompt(age: str, block: str, max_words: int = 72) -> str:
    """Escena (lo más importante, va primero) + estilo + paleta + calidad, recortado a ~75 tokens."""
    scene = field(block, "Scene")
    scene = re.sub(r"\([^)]*\)", "", scene)  # quita aclaraciones entre paréntesis
    scene = scene.split(";")[0]  # la acción principal
    palette = ", ".join(re.sub(r"#[0-9A-Fa-f]{6}", "", p).strip() for p in field(block, "Palette").rstrip(".").split(",")[:4])
    mood = field(block, "Mood").split(";")[0].split(".")[0]
    parts = [scene, STYLE[age], f"palette of {palette}" if palette else "", mood, QUALITY]
    words = ", ".join(p.strip(" ,.") for p in parts if p).replace("  ", " ").split()
    return " ".join(words[:max_words]).rstrip(",")


def fetch(token: str, prompt: str, seed: int, retries: int = 5) -> bytes:
    body = json.dumps(
        {
            "inputs": prompt,
            "parameters": {"negative_prompt": NEGATIVE, "width": WIDTH, "height": HEIGHT, "num_inference_steps": 30, "guidance_scale": 7.0, "seed": seed},
        }
    ).encode()
    delay = 10
    for attempt in range(1, retries + 1):
        req = urllib.request.Request(
            ENDPOINT,
            data=body,
            method="POST",
            headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json", "Accept": "image/png", "x-wait-for-model": "true"},
        )
        try:
            with urllib.request.urlopen(req, timeout=300) as res:
                data = res.read()
                if not res.headers.get("Content-Type", "").startswith("image/"):
                    raise RuntimeError(f"respuesta no es imagen: {data[:200]!r}")
                return data
        except urllib.error.HTTPError as e:
            detail = e.read()[:300].decode("utf-8", "replace")
            # 503: el modelo se está cargando; 429: límite de pedidos. Se reintenta.
            if e.code in (429, 500, 502, 503, 504) and attempt < retries:
                print(f"    HTTP {e.code} ({detail.strip()[:120]}); reintento en {delay} s", flush=True)
                time.sleep(delay)
                delay *= 2
                continue
            if e.code in (401, 403):
                raise SystemExit(f"Token rechazado (HTTP {e.code}). Revisa HF_TOKEN. Detalle: {detail}")
            raise RuntimeError(f"HTTP {e.code}: {detail}")
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt == retries:
                raise
            print(f"    {e}; reintento en {delay} s", flush=True)
            time.sleep(delay)
            delay *= 2
    raise RuntimeError("sin respuesta")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--only", help="ids separados por coma")
    ap.add_argument("--force", action="store_true", help="regenerar aunque la imagen ya exista")
    ap.add_argument("--dry-run", action="store_true", help="mostrar los prompts sin generar")
    ap.add_argument("--pause", type=float, default=3, help="segundos entre pedidos")
    args = ap.parse_args()

    _, _, stories = parse_prompts()
    all_ids = [s[0] for s in stories]
    if args.only:
        wanted = {x.strip() for x in args.only.split(",") if x.strip()}
        if wanted - set(all_ids):
            print(f"Ids desconocidos: {', '.join(sorted(wanted - set(all_ids)))}", file=sys.stderr)
            return 2
        stories = [s for s in stories if s[0] in wanted]

    token = os.environ.get("HF_TOKEN", "").strip()
    if not token and not args.dry_run:
        print("Falta la variable de entorno HF_TOKEN.", file=sys.stderr)
        return 2

    ok, failed = 0, []
    for i, (sid, age, block) in enumerate(stories, 1):
        prompt = compact_prompt(age, block)
        out = OUT_DIR / f"{sid}.webp"
        if args.dry_run:
            print(f"\n[{sid}] ({len(prompt.split())} palabras)\n{prompt}")
            continue
        if out.exists() and not args.force:
            print(f"[{i}/{len(stories)}] {sid}: ya existe (usa --force para regenerar)")
            continue
        print(f"[{i}/{len(stories)}] {sid}: generando con {MODEL}…", flush=True)
        try:
            size = save_webp(fetch(token, prompt, seed_for(sid)), out)
            print(f"    guardada {out.relative_to(ROOT)} ({size // 1024} KB)")
            ok += 1
        except Exception as e:  # noqa: BLE001 — se informa y se sigue con el resto
            print(f"    ERROR: {e}", file=sys.stderr)
            failed.append(sid)
        time.sleep(args.pause)

    if not args.dry_run:
        have = write_manifest(all_ids)
        print(f"\nListo: {ok} nuevas; {len(have)} de {len(all_ids)} cuentos con ilustración.")
        if failed:
            print(f"Fallaron: {', '.join(failed)}. Vuelve a ejecutar el script para reintentarlos.", file=sys.stderr)
            return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
