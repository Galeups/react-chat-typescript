import React, { FunctionComponent } from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import './App.scss';
import Login from './components/Login/Login';
import RoomList from './components/RoomList/RoomList';

type SecurityRouteProps = {
    path: string;
};

const App: FunctionComponent = () => {
    const SecureRoute: FunctionComponent<SecurityRouteProps> = ({ children }) => (
        <BrowserRouter>
            {localStorage.getItem('nickName') ? children : <Redirect to={{ pathname: '/login' }} />}
        </BrowserRouter>
    );

    return (
        <BrowserRouter>
            <>
                <Redirect to={{ pathname: '/room-list' }} />

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <SecureRoute path="room-list">
                        <RoomList />
                    </SecureRoute>
                </Switch>
            </>
        </BrowserRouter>
    );
};

export default App;
