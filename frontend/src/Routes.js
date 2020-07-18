import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewCafe from "./containers/NewCafe/NewCafe";
import Main from "./containers/Main/Main";
import Cafe from "./containers/Cafe/Cafe";

const Routes = () => {
    return (
        <Switch>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/newCafe" exact component={NewCafe}/>
            <Route path="/" exact component={Main}/>
            <Route path="/cafes/:id" component={Cafe}/>
        </Switch>
    );
};

export default Routes;