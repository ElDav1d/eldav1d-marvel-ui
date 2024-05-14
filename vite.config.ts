import { defineConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSwc(), typescript()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'eldav1d-marvel-ui',
    },
    rollupOptions: {
      output: {
        globals: {
          'eldav1d-marvel-ui': 'eldav1d-marvel-ui',
        },
      },
    },
  },
});
