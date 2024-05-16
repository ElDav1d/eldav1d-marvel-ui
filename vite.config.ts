import { defineConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSwc(), typescript(), dts({ include: ['lib'] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
