# SnakeGame

## tooling

- git
- node (lts/hydrogen)
- visual studio (ide)
  - extensions
    - [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [jest test runner](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
    - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [react devtools extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## what are we learning?

- git
- github actions (gh-pages)
- web
  - JS/TS
  - CSS/HTML
  - build tooling
  - testing
  - 2d graphics (html5 canvas)
    - sprites
    - grid
    - canvas
  - sound effects
  - music while game is going

## stages

🟡 means a major phase is in progress

✅ means an item is completed

### phase 1

✅ project initialized

- game initialized
  - scoreboard (# of apples eaten)
  - game state

### phase 2

- render grid on convas
  - 100 x 100 grid elements
- render snake on screen
- render food on screen

### phase 3

- snake can move on screen

### phase 4

- snake can eat and grow
- score updates when apple is eaten

### phase 5

- end game conditions
  - how do i lose?
    - hit the wall
    - hit myself

### phase 6

- game restart

### phase 7

TBD

### dream features

- variable snake speed
- leaderboard

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
