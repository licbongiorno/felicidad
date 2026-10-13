# Protocolo Eudaimonía

Aplicación web para el entrenamiento sistemático del bienestar mental, basada en neurociencia contemplativa,
psicología positiva y terapias de tercera generación.
Next.js 15 (App Router) · React 19 · Tailwind CSS · Motion · Firebase · Zustand.

Arquitectura, esquema de datos y decisiones de diseño: [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md).
Contenido: [guía de estilo](docs/GUIA-DE-ESTILO.md) · [registro de cambios y revisión clínica](docs/CONTENIDO-CHANGELOG.md).

## Puesta en marcha

Requiere **Node.js 20** (ver `.nvmrc`).

```bash
npm install
cp .env.local.example .env.local   # completar con la config web de Firebase
npm run dev
```

Sin configuración de Firebase la app **no arranca**: muestra una pantalla de "Configuración incompleta" en lugar de
guardar datos en un lugar inseguro. Para probarla sin Firebase, activa explícitamente el modo demo
(datos sólo en el navegador; nunca en producción):

```bash
NEXT_PUBLIC_DEMO_MODE=true npm run dev
```

## Calidad

| Comando | Qué verifica |
|---|---|
| `npm run typecheck` | Tipos de TypeScript |
| `npm run lint` | ESLint (reglas de Next.js, React y TypeScript) |
| `npm test` | Lógica de dominio, **coherencia del contenido clínico con las reglas de seguridad** y componentes (Vitest + Testing Library) |
| `npm run test:rules` | Reglas de Firestore contra el emulador (requiere Java) |
| `npm run test:e2e` | Flujos completos en escritorio y móvil, auditoría **WCAG 2.1 AA** (claro y oscuro), CSP y uso sin conexión (Playwright) |
| `npm run verify:refs` | Verifica cada referencia con DOI contra Crossref (obligatorio cada 12 meses) |
| `npm run check` | Tipos + lint + tests unitarios |

La integración continua (`.github/workflows/ci.yml`) ejecuta todo lo anterior en cada push y pull request.

## Firebase

1. **Authentication** → proveedores *Correo/contraseña* y *Google*.
2. **Firestore** en la región que exija el marco legal aplicable.
3. `npx firebase-tools deploy --only firestore` (reglas e índices).

## Despliegue en Vercel

Importar el repositorio y añadir las variables `NEXT_PUBLIC_FIREBASE_*`. Agregar el dominio en
Firebase → Authentication → *Authorized domains*.

> Herramienta complementaria: no reemplaza la evaluación ni el tratamiento profesional.
