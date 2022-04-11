import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// noinspection SpellCheckingInspection
export const NEWQUOTE = "NEWQUOTE";

const quoteReducer = (state = [], action) => {
  switch (action.type) {
    case NEWQUOTE:
      return [...action.quote];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ quotes: quoteReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
