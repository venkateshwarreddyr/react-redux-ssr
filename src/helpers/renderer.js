import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Routes from "../Client/Routes/Routes";
import createStore from "./createStore";

const store = createStore();
export default (req) => (
  <Provider store={store}>
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  </Provider>
);
