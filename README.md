# create-npm-react-module [![GitHub Repo stars](https://img.shields.io/github/stars/furkansancu/create-npm-react-module?style=plastic)](https://github.com/furkansancu/create-npm-react-module)

Easy to use CLI for creating a react environment to develop and publish React component packages.

If something doesn’t work, please [file an issue](https://github.com/furkansancu/create-npm-react-module/issues/new).

## Quick Overview

```bash
npx create-npm-react-module my-package
cd my-package
npm run start
```

Thats pretty much it, now you can code your component inside `src/index.js` and customize preview environment in `preview/index.js`.

## Folder Tree

```
my-package/
├── README.md
├── webpack.config.js
├── .babelrc
├── .gitignore
├── .npmignore
├── package.json
├── node_modules
├── preview/
│   ├── App.js
│   ├── App.module.css
│   ├── index.js
|   └── public/
|       ├── index.html
|       ├── react.svg
|       └── favicon.ico
└── src/
    ├── index.js
    └── MyComponent/
        ├── MyComponent.js
        └── MyComponent.module.scss
```

## Commands
- To start preview application in development mode run:
```sh
npm run start
```
- To distribute your component to `dist/` folder in production mode run:
```sh
npm run build
```

## Detailed Use
```bash
npx create-npm-react-module [project-name] [options]
```

#### Options:
- `--use-yarn`: forces to use yarn for the project.
- `--use-npm`: forces to use npm for the project.

## License

Create React Component Package is open source software [licensed as MIT](https://github.com/furkansancu/create-npm-react-module/blob/main/LICENSE).