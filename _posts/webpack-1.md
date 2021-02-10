---
title: 'CRA 없이 Webpack 써보기 - (1)'
category: '개발-공부'
coverImage: '/assets/blog/webpack-1/webpack.png'
date: '2021-01-23T05:35:07.322Z'
ogImage:
  url: '/assets/blog/webpack-1/webpack.png'
---

CRA(create-react-app)로 만들어진 프로젝트에서 npm run eject 해보면 CRA가 우리에게 많은 것을 해주고 있다는 것을 알게된다. 대표적으로 Jest, eslint, Webpack, Babel 설정이 있는데 그 중심에 Webpack가 있다.

CRA가 초기 웹팩 설정을 대신해주기 때문에 굳이 모든 설정을 직접할 필요는 없지만 궁금하니까 웹팩 설정을 조금 들여다보자.

## Webpack은 무엇인가?

Webpack은 여러개의 모듈들을 읽어들여 dependency graph를 만들고 이를 통해 하나 혹은 여러개의 번들 파일을 만드는 <strong>모듈 번들러</strong>이다.

## 1. CRA없이 React 프로젝트 만들기
```shell
$ mkdir webpack-folder
$ cd webpack-folder
$ npm init -y
$ npm i react react-dom @babel/core @babel/preset-react webpack webpack-cli -D
```
npm 프로젝트를 만들고 React 패키지와 Webpack, Babel 의존 패키지를 설치합니다.

다음과 같이 HTML, CSS, Javascript 파일을 생성합니다.
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack Configuration without CRA</title>
<body>
    <div id="root"></div>
</body>
</html>
```

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function App () {
    return (
        <div>
            hello
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```

```css
/* src/index.css */
html,
body {
  margin: 0;
  padding: 0;
}
```


## 웹팩 설정 파일
```javascript
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}
```
* entry는 웹팩에게 모듈을 읽기 시작할 진입점을 알려줍니다.
* output는 웹팩이 만든 번들 파일의 이름이나, 경로 설정를 설정해줍니다.

<br />

```bash
$ npx webpack
```

현재 상태에서 npx webpack을 실행하면 entry 포인트인 index.js에서 적절한 loader를 설정하라는 에러가 납니다. 왜냐면 위 index.js는 pure javascript가 아니라 React의 jsx를 리턴하기 때문입니다. loader를 통해서 웹팩에게 jsx 모듈도 읽을 수 있게 해봅시다.


## Loader 추가하기
```bash
$ npm i style-loader css-loader babel-loader -D
```

기본적으로 Webpack은 자바스크립트 모듈만 읽습니다. 비자바스크립트 모듈도 웹팩이 읽을 수 있는 모듈로 변경해주는 것이 loader의 역할입니다. 
* css-loader는 웹팩이 css 파일을 읽을 수 있도록 이를 모듈로 변환해줍니다. 
  * 그리고 style-loader로 웹팩이 읽은 CSS 모듈을 DOM에 inject합니다. 즉, HTML 문서안에 style 태그 안으로 주입됩니다.
* babel-loader는 웹팩이 js 모듈을 읽을 때 babel을 통해 ES6+ 문법을 이전 버전으로 transpiling 한 후에 번들링을 하게 해줍니다.

```javascript
// webpack.config.js 

module.exports = {
  ... 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          exclude: /(node_modules|dist)/
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

위와 같이 설정 파일을 다시 작성하고 npx webpack을 실행하면 dist 폴더 밑에 정상적으로 bundle.js 파일이 생성됩니다.

## 2. Typescript with Webpack

Typescript로 개발시 Webpack 설정 방법

```bash
$ npm tsx --init
$ npm i ts-loader typescript -D
```



```javascript
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>hello world</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

```

```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ]
  },
}
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",                         
    "module": "es5",
    "jsx": "react",
    "sourceMap": true
  },
  "exclude": "node_modules"
}

```

ts-loader가 tsc, 즉 타입스크립트 컴파일러를 사용하기 때문에 tsconfig.json 파일을 설정해야합니다. 주의할 점은 module의 키 값으로 "CommonJS"를 주게되면
웹팩이 [tree-shaking](https://webpack.js.org/guides/tree-shaking/)을 못하므로 조심해야합니다.  