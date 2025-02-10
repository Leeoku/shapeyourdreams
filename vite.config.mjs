import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  base: '/shapeyourdreams'
  // resolve: {
  //   alias: {
  //     '@data': path.resolve('data'), // Adjust path to point to the `data` folder
  //   },
  // },
});