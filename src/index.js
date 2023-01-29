// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './/view/App';
// import store from './/state/configure.store'

// import { Provider } from 'react-redux';
// ReactDOM.render(
//   <React.StrictMode>
//      <Provider store={store}>
//        <App />
//      </Provider>
//    </React.StrictMode>,
// document.getElementById('root')
// );

// Optionally - fetch initial data from an api
//----------------------------------------------
// import { fetchRandomPerson } from "./state/person.slice";
// store.dispatch(fetchRandomPerson());

import { Provider } from "react-redux";
import * as ReactDOMClient from "react-dom/client";
import App from './/view/App';
import store from './/state/configure.store'



const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
