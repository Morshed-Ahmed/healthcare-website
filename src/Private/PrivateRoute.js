import React from 'react';
import { Spinner } from "react-bootstrap";
import {
    Route,
    Redirect,
} from "react-router-dom";
import useAuth from "../components/Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Spinner animation="border" variant="info" />
    }

    return (
        <Route {...rest}
            render={({ location }) =>
                user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            } />
    );
};

export default PrivateRoute;