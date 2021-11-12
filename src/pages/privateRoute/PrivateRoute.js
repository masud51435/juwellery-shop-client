import { LinearProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../context/UseAuth';


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();
  if (isLoading) {
    return <LinearProgress color="secondary" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;