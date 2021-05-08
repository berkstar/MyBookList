import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({path: Path, component: Component, isAuthenticated = isAuthenticated, isWaiting = isWaiting}) => {
    if(isWaiting) {
        return <div>Waiting!</div>
    }
    else if(!isAuthenticated) {
        return <Redirect to="/login" />
    }
    else {
        return <Route exact path={Path} component={Component}></Route>
    }
}
