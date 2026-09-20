/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  test: {
    environment: 'happy-dom',
    globals: true,
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**']
  },
  build: {
    target: 'es2022',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/ajv')) {
            return 'vendor-validator';
          }
        }
      }
    }
  }
});
