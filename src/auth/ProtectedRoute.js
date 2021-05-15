
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// https://dev.to/mychal/protected-routes-with-react-function-components-dh
// const ProtectedRoute = ({ component: Component, ...rest }) => {}
export const ProtectedRoute = ({ logInStatus, initializing, ...rest }) => {
    if (initializing) {
      return <div>Wait</div>;
    }
    if (!logInStatus) {
      return <Redirect to='/sign-in' />
    }
    return (
      <Route {...rest} />
    );
  }