import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
 
//history
import { history } from '../helpers/hystory';
 
//pages
import HomePage from "../Pages/Home"
import LoginPage from "../Pages/Login"
 
function Routes() {
   return (
    <Router history={history}>
    <Switch>
        <RouteGuard exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/" />
    </Switch>
</Router>
   );
}
 
export default Routes