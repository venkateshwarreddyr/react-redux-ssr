import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../src/Client/containers/HomePage";
import LoginPage from './../src/Client/containers/LoginPage';

const Routes = () => {
  return(
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
    </div>
  );
};

export default Routes;
