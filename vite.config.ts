import { defineConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSwc()],
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
