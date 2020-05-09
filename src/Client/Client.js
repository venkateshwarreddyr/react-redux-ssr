import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import Routes from "./Routes/Routes";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk),
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root"),
);
