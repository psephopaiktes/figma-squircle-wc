import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: `${__dirname}/src/` },
    ],
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
});
