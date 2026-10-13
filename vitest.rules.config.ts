import { defineConfig } from 'vitest/config';

/** Tests de reglas: requieren el emulador de Firestore (npm run test:rules). */
export default defineConfig({
  test: {
    include: ['tests/rules/**/*.test.ts'],
    environment: 'node',
    testTimeout: 20_000,
    fileParallelism: false,
  },
});
