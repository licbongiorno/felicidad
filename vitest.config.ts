import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  // tsconfig usa jsx: "preserve" (lo transforma Next); en los tests lo transforma esbuild.
  esbuild: { jsx: 'automatic' },
  test: {
    // Dominio en Node; los tests de componentes declaran `@vitest-environment jsdom`.
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'node',
    setupFiles: ['src/test/setup.ts'],
  },
});
