import { LinearProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../context/UseAuth';




const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading } = UseAuth();
  const { admin } = UseAuth();
  if (isLoading || !admin) {
    return <LinearProgress color="secondary" />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;