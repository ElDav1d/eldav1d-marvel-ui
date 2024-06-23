# ElDav1d Marvel UI: DEVELOPMENT

This is an UI library effort consisting in the abstraction of presentational logic applied on my pet project [Playing with Marvel API](https://github.com/ElDav1d/playing-with-marvel-api)

It mimics the look and feel of the [Marvel Characters](https://www.marvel.com/characters) page.

The approach relies on [vite's library mode](https://vitejs.dev/guide/build.html#library-mode) and is heavily inspired by [this article](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma) and this [hybrid implementation](https://github.com/waldronmatt/groundwork/tree/main/packages/ui#readme)

## Stack is React + TypeScript + Vite + Vitest + React Testing Library + Storybook + TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is applied as Peer Dependency. Be dareful about conflicts with your _tailwind.config.js_ or your version, if your project has it already installed.

## Features

Support for both ECMAScript Modules and CommonJS

- Outputs:
  - `esm` and `cjs` source files
  - source maps for JavaScript files (`.js.map`)
  - `esm` and `cjs` declaration files (`.d.ts` and `.c.ts`)
  - `esm` and `cjs` source maps for declaration files (`.d.ts.map` and `.c.ts.map`)
  - compiled and uglified CSS (consuming app is not required to support css modules)
- Subpath exports for explicit path referencing. Will auto map to the right module system
- Libraries are externalized for a lighter bundle size (`react`, `react/jsx-runtime`, `tailwindcss`, `react-lazy-load-image-component`)

## Prerequisites

You need Node.js and npm or yarn installed on your machine. To check if you have Node.js installed, run this command in your terminal:

```bash
node -v
```

```bash
yarn -v
```

### Install the dependencies:

`npm install` or `yarn`

## Main Scripts

### `npm run storybook` or `yarn storybook`

Starts the Storybook tool for developing UI components in isolation. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run test` or `yarn test`

Launches the test runner for the whole project.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder. It takes this sequence:

- **clean previous build:** remove ./dist directory and its contents

- **compile JS:** with specific ./tsconfig-build.json

- **build:** creates production bundle on new ./dist directory

- **rename CSS file:** into ./dist/lib.css preventing conflicts on consumer

- **clean irrelevant files:** removes tests and stories for optimal bundle size

# ElDav1d Marvel UI: USAGE

## Install package

```bash
npm i 'eldav1d-marvel-ui'
```

```bash
yarn add 'eldav1d-marvel-ui'
```

## Import CSS

On top of your project, in order make it available

```bash
//src/App.tsx

import 'eldav1d-marvel-ui/dist/lib.css';
...
```

## Import and apply components constants or utilities

All available with named imports

```bash
//tailwind.config.js

import { MARVEL_RED } from 'eldav1d-marvel-ui/'
...
module.exports = {
  theme: {
    extend: {
      colors: {
        red: MARVEL_RED,
      },
    },
  },
}
```

```bash
//src/App.tsx

import { Loader } from 'eldav1d-marvel-ui/'
...
function App() {
  return <Loader loadingLabel={'...loading'} />
}
```
