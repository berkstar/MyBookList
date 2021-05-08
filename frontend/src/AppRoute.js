import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Api from 'api/Api'

import Login from 'components/auth/Login';
import Register from 'components/auth/Register';
import LandingPage from 'components/landing/LandingPage';
import Dashboard from 'components/dashboard/Dashboard';
import CourseBoard from "./components/dashboard/home/Thread/ForumBoard";
import otherProfile from "./components/dashboard/profile/OtherProfile";
import BookDetails from 'components/dashboard/book-details/BookDetails'


function AppRoute() {

    const [isAuthenticated, setAuth] = useState(0);
    const [isWaiting, setWait] = useState(1);

    async function check() {
        let response = await Api.isAuthenticated();
        let isAuthenticated = response.data.grant;
        setAuth(isAuthenticated);
        setWait(0);
    }

    return (
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <ProtectedRoute exact path='/dashboard' component={Dashboard} isAuthenticated={isAuthenticated} isWaiting={isWaiting}>{check()}</ProtectedRoute>
            <ProtectedRoute exact path='/test' component={CourseBoard} isAuthenticated={isAuthenticated} isWaiting={isWaiting}>{check()}</ProtectedRoute>
            <ProtectedRoute exact path='/bd' component={BookDetails} isAuthenticated={isAuthenticated} isWaiting={isWaiting}>{check()}</ProtectedRoute>
            <ProtectedRoute exact path='/prof' component={otherProfile} isAuthenticated={isAuthenticated} isWaiting={isWaiting}>{check()}</ProtectedRoute>
        </Switch>
    );
}

export default AppRoute;