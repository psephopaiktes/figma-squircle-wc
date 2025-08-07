import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: `${__dirname}/src/` },
    ],
  },
  build: {
    outDir: 'dist-cdn',
    emptyOutDir: true,
    lib: {
      entry: resolve('src/index.ts'),
      name: 'figma-squircle-wc',
      fileName: () => 'index.ts',
      formats: ['es']
    },
  }
});
