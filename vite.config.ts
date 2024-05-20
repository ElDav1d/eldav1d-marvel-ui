import { defineConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import * as glob from 'glob';
import fs from 'fs-extra';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactSwc(),
    typescript(),
    dts({
      // create two type folders, one for esm and cjs
      outDir: ['dist/types/esm', 'dist/types/cjs'],
      // modify type files after they have been written
      afterBuild: async () => {
        // Fetch all .d.ts files recursively from the dist/types/cjs directory
        const files = glob.sync('dist/types/cjs/**/*.d.{ts,ts.map}', { nodir: true });
        // Since TypeScript 5.0, it has emphasized that type files (*.d.ts) are also affected by its ESM and CJS context.
        // This means that you can't share a single type file for both ESM and CJS exports of your library.
        // You need to have two type files when dual-publishing your library.
        // see https://publint.dev/rules#export_types_invalid_format
        await Promise.all(
          files.map(async (file) => {
            // Generate the new files with the new .c.ts/.c.ts.map naming
            const newFilePath = file.replace(/\.d\.ts(\.map)?$/, '.c.ts$1');
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            await fs.move(file, newFilePath, { overwrite: true });
          }),
        );
      },
    }),
  ],
  build: {
    copyPublicDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/stories/*.ts'],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: [
        {
          format: 'es',
          exports: 'named',
          entryFileNames: 'esm/[name].js',
          // this is defined twice so the css files output in the desired styles folder
          // this is slightly inefficient as the compilation for styles occurs twice
          assetFileNames: 'styles/[name][extname]',
        },
        {
          format: 'cjs',
          exports: 'named',
          entryFileNames: 'cjs/[name].cjs',
          assetFileNames: 'styles/[name][extname]',
        },
      ],
    },
  },
});
