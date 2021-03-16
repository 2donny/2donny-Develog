---
title: 'Virtual DOM의 진짜 가치를 아시나요?'
category: 'React 개발-공부'
description: "Virtual DOM에 진짜 가치"
coverImage: '/assets/blog/virtual-dom/virtual-dom.png'
date: '2021-02-11T05:35:07.322Z'
ogImage:
  url: '/assets/blog/virtual-dom/virtual-dom.png'
---


> 이 글은 [원문](https://www.accelebrate.com/blog/the-real-benefits-of-the-virtual-dom-in-react-js/)인 "The Real Benefits of the Virtual DOM in React.js" 글을 읽고 정리한 글입니다.

<br />

React 개발을 하더라도 React.js가 제공하는 Virtual DOM의 혜택에 대해서 잘 모르고 개발하는 개발자가 많다. (사실 나도 그랬다)

React의 Virtual DOM은 웹 어플리케이션 내의 View를 업데이트하는데 매우 효율적인 방법이다. 우리는 학습자로서 React가 왜 만들어졌는지에 대해 처음 배울 때 DOM을 직접 다루고 업데이트하는 것이 비효율적이고 느리다는 것을 얼핏 배우고 넘어가게 되는데. 이 글에선 그 얼핏에 대하여 자세히 짚고 넘어가고자 한다. 

<br />   

## 왜 우리는 UI 라이브러리가 필요한가?
React의 가장 중요한 2가지 아이디어는 <strong>event-driven</strong>과 <strong>state에 대한 변화</strong>이다. <br />
DOM의 UI 컴포넌트는 각각의 internal state가 있다. 그런데 브라우저를 업데이트하는 것이 그 internal state가 변할 때 마다 DOM을 그저 화면에 새롭게 렌더링 것처럼 간단한 문제는 결코 아닐 것이다. 만약 그랬다면 Gmail에서 새로운 메세지가 들어올 때 마다 브라우저가 refresh되는 UX를 경험해야한다.

DOM의 statefulness는 우리가 UI 라이브러리를 사용해야하는 이유이다. UI 라이브러리가 data model의 변경을 계속 지켜보고 변경된 부분만 브라우저에게 알려주어 DOM을 변경한다.

## 그 중에 왜 하필 React인가?

What makes React and its Virtual DOM so different is that it’s simpler than other approaches to making JavaScript reactive from a programmer’s perspective. You write pure JavaScript that updates React components, and React updates the DOM for you. The data binding isn’t intertwined with the application.

React uses one-way data binding to make things simpler. Every time you type in an input field in a React UI, for example, it doesn’t directly change the state of that component. Instead, it updates the data model, which causes the UI to be updated and the text you typed into the field appears in the field.