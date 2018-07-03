# typescript-webpack-setup


[TypeScript Setup](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

```
npm init
```

```
npm i -g webpack
```

```
npm i --save react react-dom @types/react @types/react-dom
```

 - awesome-typescript-loader helps Webpack compile your TypeScript code using the TypeScript’s standard configuration file named tsconfig.json
- source-map-loader uses any source map outputs from TypeScript to inform webpack when generating its own sourcemaps.
```
npm i --save-dev typescript awesome-typescript-loader source-map-loader
```

[tsconfig.json info](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)