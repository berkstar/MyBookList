import React from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const loadingScreen = () => {
    return (
        <Spinner className="justify-content-center align-items-center" animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

export const ProtectedRoute = ({path: Path, component: Component, isAuthenticated = isAuthenticated, isWaiting = isWaiting}) => {
    if(isWaiting) {
        return loadingScreen();
    }
    else if(!isAuthenticated) {
        return <Redirect to="/login" />
    }
    else {
        return <Route exact path={Path} component={Component}></Route>
    }
}
