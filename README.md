# Blog App without the backend

The whole purpose of this was to learn and recap the react hooks and learn ContextApi

## Context Api (Why to use)

Its essential to use context api when there is a prop drilling in our application The code will like ugly due to prop drillng,Prop drilling becomes necessary in scenarios where data needs to be shared across multiple levels of components within the hierarchy. As components become more deeply nested, passing props directly can become challenging.

## useLess Renders (when and why to avoid Context Api)

Example: ContextA provides the state { a: 1, b: 1 } and ComponentA reads only a . Even if only b changes ComponentA will re-render – for no reason, it will render the same content. This is called an extra or unnecessary re-render. For that reason, it is bad practice to have a single, huge state provided by a context

### Install this project locally

1-clone the project
2-cd your directory
3- npm i/ npm install
4- npm run start

#### Features of the Blog App

1-Already added posts you can create new posts but on refresh they wont remain there as there is no backend/server database
2-Clear All posts
3-Search posts
