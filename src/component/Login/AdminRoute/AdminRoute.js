import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children , ...rest }) => {
    const {user , admin, isLoading} = useAuth()
    if(isLoading){return <CircularProgress></CircularProgress> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
             user.email && admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default AdminRoute;