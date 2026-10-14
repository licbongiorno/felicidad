import { defineConfig, devices } from '@playwright/test';

/**
 * Tests de punta a punta en modo demo (sin Firebase): recorren los flujos clínicos
 * reales en un navegador y auditan la accesibilidad con axe.
 */
export default defineConfig({
  testDir: 'e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:3000',
    locale: 'es-ES',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'escritorio', use: { ...devices['Desktop Chrome'] } },
    { name: 'movil', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    // En CI se prueba la build de producción (el service worker sólo se registra en producción).
    command: process.env.CI ? 'npx next start -p 3000' : 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 180_000,
    env: { NEXT_PUBLIC_DEMO_MODE: 'true' },
  },
});
