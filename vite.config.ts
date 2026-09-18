/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  test: {
    environment: 'happy-dom',
    globals: true
  },
  build: {
    target: 'es2022',
    sourcemap: true
  }
});
