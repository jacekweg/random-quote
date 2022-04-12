import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { REQUESTING_DATA, RECEIVED_DATA } from "./reducers/request";
import store from "./store";

async function getQuotesFromApi(dispatch) {
  dispatch({ type: REQUESTING_DATA });

  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    let responseJson = await response.json();
    dispatch({ type: RECEIVED_DATA, quotes: responseJson.quotes });
  } catch (error) {
    console.log(error);
    dispatch({ type: RECEIVED_DATA, quotes: "" });
  }
}

const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(getQuotesFromApi);

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
