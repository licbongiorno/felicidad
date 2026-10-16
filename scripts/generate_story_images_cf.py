#!/usr/bin/env python3
"""
Genera las ilustraciones de los cuentos con Cloudflare Workers AI (por defecto
@cf/black-forest-labs/flux-1-schnell) y sobrescribe public/cuentos/<id>.webp.

Workers AI tiene una cuota diaria gratuita. Si se agota, el script se detiene, guarda lo que
ya generó y termina con código 1: al día siguiente se vuelve a correr y sigue con las que faltan
(las que ya existen se saltean, salvo con --force).

Usa los mismos prompts compactos que la versión de Hugging Face (docs/PROMPTS-ILUSTRACIONES.md).
Las credenciales NUNCA van en el código: se leen de las variables de entorno.

  export CF_ACCOUNT_ID=...          # (en GitHub: secreto CF_ACCOUNT_ID)
  export CF_API_TOKEN=...           # (en GitHub: secreto CF_API_TOKEN, permiso Workers AI)
  python3 scripts/generate_story_images_cf.py               # las que falten
  python3 scripts/generate_story_images_cf.py --only pez-burbuja,el-faro --force
  python3 scripts/generate_story_images_cf.py --dry-run     # sólo ver los prompts

CF_MODEL permite probar otro modelo de Workers AI (por ejemplo
@cf/stabilityai/stable-diffusion-xl-base-1.0, que acepta ancho, alto y prompt negativo).

Requiere Python 3.9+ y Pillow (pip install pillow).
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_story_images import OUT_DIR, ROOT, parse_prompts, save_webp, seed_for, write_manifest  # noqa: E402
from generate_story_images_hf import NEGATIVE, compact_prompt  # noqa: E402

MODEL = os.environ.get("CF_MODEL") or "@cf/black-forest-labs/flux-1-schnell"
IS_FLUX = "flux" in MODEL.lower()


class QuotaExhausted(Exception):
    """Se agotó la cuota gratuita del día."""


def fetch(account: str, token: str, prompt: str, seed: int, retries: int = 4) -> bytes:
    url = f"https://api.cloudflare.com/client/v4/accounts/{account}/ai/run/{MODEL}"
    # FLUX.1-schnell en Workers AI acepta prompt, steps (hasta 8) y seed; la salida es cuadrada y
    # save_webp la recorta a 16:9. SDXL acepta además ancho, alto y prompt negativo.
    payload = (
        {"prompt": prompt, "steps": 8, "seed": seed}
        if IS_FLUX
        else {"prompt": prompt, "negative_prompt": NEGATIVE, "width": 1344, "height": 768, "num_steps": 20, "guidance": 7.0, "seed": seed}
    )
    body = json.dumps(payload).encode()
    delay = 10
    for attempt in range(1, retries + 1):
        req = urllib.request.Request(url, data=body, method="POST", headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=300) as res:
                data = res.read()
                ctype = res.headers.get("Content-Type", "")
            if ctype.startswith("image/"):
                return data  # algunos modelos devuelven la imagen directa
            out = json.loads(data)
            image = (out.get("result") or {}).get("image")
            if not out.get("success", True) or not image:
                raise RuntimeError(f"respuesta sin imagen: {str(out)[:200]}")
            return base64.b64decode(image)
        except urllib.error.HTTPError as e:
            detail = e.read()[:400].decode("utf-8", "replace")
            if e.code in (401, 403):
                print(f"Credenciales rechazadas (HTTP {e.code}). Revisa CF_ACCOUNT_ID y CF_API_TOKEN (permiso Workers AI). Detalle: {detail}", file=sys.stderr)
                sys.exit(3)
            if e.code == 404:
                print(f"No existe el modelo {MODEL} o la cuenta (HTTP 404). Detalle: {detail}", file=sys.stderr)
                sys.exit(3)
            # 429 con aviso de límite diario: no tiene sentido reintentar hoy.
            if e.code == 429 and ("daily" in detail.lower() or "neurons" in detail.lower() or "4006" in detail):
                raise QuotaExhausted(detail)
            if e.code in (429, 500, 502, 503, 504) and attempt < retries:
                print(f"    HTTP {e.code} ({detail.strip()[:120]}); reintento en {delay} s", flush=True)
                time.sleep(delay)
                delay *= 2
                continue
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
    ap.add_argument("--pause", type=float, default=2, help="segundos entre pedidos")
    args = ap.parse_args()

    _, _, stories = parse_prompts()
    all_ids = [s[0] for s in stories]
    if args.only:
        wanted = {x.strip() for x in args.only.split(",") if x.strip()}
        if wanted - set(all_ids):
            print(f"Ids desconocidos: {', '.join(sorted(wanted - set(all_ids)))}", file=sys.stderr)
            return 2
        stories = [s for s in stories if s[0] in wanted]

    account = os.environ.get("CF_ACCOUNT_ID", "").strip()
    token = os.environ.get("CF_API_TOKEN", "").strip()
    if (not account or not token) and not args.dry_run:
        print("Faltan las variables de entorno CF_ACCOUNT_ID y CF_API_TOKEN.", file=sys.stderr)
        return 2

    ok, failed, quota = 0, [], False
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
            size = save_webp(fetch(account, token, prompt, seed_for(sid)), out)
            print(f"    guardada {out.relative_to(ROOT)} ({size // 1024} KB)")
            ok += 1
        except QuotaExhausted as e:
            print(f"    Se agotó la cuota gratuita de hoy: {str(e)[:200]}", file=sys.stderr)
            failed.append(sid)
            quota = True
            break
        except Exception as e:  # noqa: BLE001 — se informa y se sigue con el resto
            print(f"    ERROR: {e}", file=sys.stderr)
            failed.append(sid)
        time.sleep(args.pause)

    if not args.dry_run:
        have = write_manifest(all_ids)
        print(f"\nListo: {ok} nuevas; {len(have)} de {len(all_ids)} cuentos con ilustración.")
        if quota:
            print("Mañana vuelve a ejecutar el flujo: seguirá con las que faltan.", file=sys.stderr)
        if failed:
            print(f"Pendientes: {', '.join(failed)}.", file=sys.stderr)
            return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
