import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import LandingPage from 'components/landing/LandingPage';
import Dashboard from 'components/dashboard/Dashboard';
import otherProfile from "./components/dashboard/profile/OtherProfile";
import BookDetails from 'components/dashboard/book-details/BookDetails'


function AppRoute() {

    return (
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route exact path='/bd' component={BookDetails}></Route>
            <Route exact path='/prof' component={otherProfile}></Route>
        </Switch>
    );
}

export default AppRoute;