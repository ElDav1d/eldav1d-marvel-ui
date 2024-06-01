# ElDav1d Marvel UI

This is an UI library effort consisting in the abstraction of mere presentational components applied on my pet project [Playing with Marvel API](https://github.com/ElDav1d/playing-with-marvel-api)

It mimics the look and feel of the [Marvel Characters](https://www.marvel.com/characters) page.

The approachrelies on [vite's library mode](https://vitejs.dev/guide/build.html#library-mode) and is heavily inspired by [this article](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma) and this [hybrid implementation](https://github.com/waldronmatt/groundwork/tree/main/packages/ui#readme)

## Stack is React + TypeScript + Vite + Vitest + React Testing Library + Storybook + TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is applied as Peer Dependency. Be dareful about conflicts with your _tailwind.config.js_ or your version, if your project has it already installed.

## Features

Support for both ECMAScript Modules and CommonJS

- Outputs:
  - `esm` and `cjs` source files
  - source maps for JavaScript files (`.js.map`)
  - `esm` and `cjs` declaration files (`.d.ts` and `.c.ts`)
  - `esm` and `cjs` source maps for declaration files (`.d.ts.map` and `.c.ts.map`)
  - compiled CSS modules (consuming app is not required to support css modules)
- Subpath exports for explicit path referencing. Will auto map to the right module system
- Libraries are externalized for a lighter bundle size (`react`, `react/jsx-runtime`)

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

### Apply type declarations on your project

This is a beta version. Until the build issues are resolved and the type definitions come from the library itself, they need to be provided from the consumer project.

```bash
my-project/
├── types/
│   └── declarations.d.ts
```

```bash
// types/declarations.d.ts
declare module 'eldav1d-marvel-ui';
```

This means: (still) no autompletion neither type checking oin the consumer project.

## Available Scripts

### `npm run dev` or `yarn dev`

Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run test` or `yarn test`

Launches the test runner for the whole project.

### `npm run test:units` or `yarn test:units`

Launches the test runner for component testing.

### `npm run lint` or `yarn lint`

Runs the linter to check for any syntax errors or deviations from the coding standards.

### `npm run preview` or `yarn preview`

Runs a preview of the built app.

### `npm run storybook` or `yarn storybook`

Starts the Storybook tool for developing UI components in isolation. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run build-storybook` or `yarn build-storybook`

Builds the Storybook for static deployment.
