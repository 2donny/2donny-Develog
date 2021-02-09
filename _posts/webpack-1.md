---
title: 'CRA 없이 Webpack 써보기 - (1)'
category: '개발-공부'
coverImage: '/assets/blog/webpack-1/webpack.png'
date: '2021-01-23T05:35:07.322Z'
ogImage:
  url: '/assets/blog/webpack-1/webpack.png'
---

CRA(create-react-app)로 만들어진 프로젝트에서 npm run eject 해보면 CRA가 우리에게 많은 것을 해주고 있다는 것을 알게된다. 대표적으로 jest, eslint, webpack, babel 설정이 있는데 그 중심에 Webpack가 있다.

CRA가 초기 웹팩 설정을 대신해주기 때문에 굳이 처음부터 할 필요는 없지만 궁금하니까 웹팩 설정을 조금 들여다보자.

## 먼저, Webpack은 무엇인가?

webpack은 여러개의 모듈들을 읽어들여 dependency graph를 만들고 이를 통해 하나 혹은 여러개의 번들 파일을 만드는 <strong>모듈 번들러</strong>이다.

## 시작해보기

```shell
$ mkdir webpack-folder
$ cd webpack-folder
$ npm init -y
$ npm i webpack webpack-cli -D
```


