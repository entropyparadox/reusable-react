import React, { ComponentType, FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../hooks';

interface AuthRouteProps {
  path: string;
  component: ComponentType;
  guestOnly?: boolean;
}

export const AuthRoute: FC<AuthRouteProps> = ({
  path,
  component: Component,
  guestOnly = false,
}) => {
  const { authenticated } = useAuth();

  return (
    <Route
      path={path}
      render={({ location }) => {
        if (guestOnly && authenticated) {
          return <Redirect to={{ pathname: '/', state: { from: location } }} />;
        }
        if (!guestOnly && !authenticated) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          );
        }

        return <Component />;
      }}
    />
  );
};
