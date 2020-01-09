// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));



// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state
    ? JSON.parse(localStorage.state)
    : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
