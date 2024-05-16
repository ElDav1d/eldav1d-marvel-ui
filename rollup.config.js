import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'dist/eldav1d-marvel-ui.js',
  output: {
    file: 'dist/eldav1d-marvel-ui.js',
    format: 'cjs',
  },
  plugins: [commonjs()],
};
