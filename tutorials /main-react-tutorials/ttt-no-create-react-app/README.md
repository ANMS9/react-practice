# WEBPACK Tutorial

(Getting Started)[https://www.valentinog.com/blog/webpack-tutorial/]


###Webpack 4: Overriding Defaults entry/output

```
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
```

###Initialize a package.json by running:
```npm init -y```

###webpack 4 in:
```
npm i webpack --save-dev
npm i webpack-cli --save-dev
```

### Babel
```
npm i babel-core babel-loader babel-preset-env --save-dev
```

### React
```
npm i react react-dom --save-dev
npm i babel-preset-react --save-dev
```

### HTML
```
npm i html-webpack-plugin html-loader --save-dev
```

### CSS
```
npm i mini-css-extract-plugin css-loader --save-dev
```

### SASS
```
npm i sass-loader node-sass webpack --save-dev
npm i style-loader css-loader --save-dev
```

### Dev Server
```
npm i webpack-dev-server --save-dev
```

### ESLint
``` 
npm i eslint --save-dev
npm i babel-eslint --save-dev
./node_modules/.bin/eslint --init
```

## Run project dev version
```
npm run dev 
```

## Run project prod version
```
npm run build
```

## ESLint
```
npm run lint
```

