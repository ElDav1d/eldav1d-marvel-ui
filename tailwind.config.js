import { MARVEL_RED } from './lib/utils/constants.ts';

/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: [
    './index.html',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: MARVEL_RED,    
      },

    },
  },
  plugins: [],
}