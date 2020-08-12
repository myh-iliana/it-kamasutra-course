import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import store from "./store";
import { Provider } from "./StoreContext";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
