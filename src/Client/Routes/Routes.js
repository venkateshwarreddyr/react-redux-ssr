import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from './../containers/HomePage/HomePage';
import LoginPage from './../containers/LoginPage/LoginPage';

const Routes = () => {
  return(
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
    </div>
  );
};

export default Routes;
