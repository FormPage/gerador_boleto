import React from "react";
import { Switch } from "react-router";
import { Route, Redirect } from "react-router-dom";
import Receipt from "../pages/receipt/receipt";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/receipt" />
      </Route>
      <Route exact path="/receipt" component={Receipt} />
    </Switch>
  );
};

export default Routes;
