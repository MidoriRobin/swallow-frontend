import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export interface IAuthHandlerProps {
  children: JSX.Element;
}

/**
 * Accepts a react node object and renders it if authorized user exists in context, otherwise routes user to login page.
 * @param props
 * @returns
 */
export default function AuthHandler({ children }: IAuthHandlerProps) {
  let devAuthDisable = process.env.REACT_APP_DISABLE_AUTH;

  console.log(devAuthDisable);

  let auth = useAuth();
  let location = useLocation();

  console.log('Auth info', auth);

  //TODO: make into an extension for the route component so it can be substituted for protected routes

  return auth.user.loggedIn || devAuthDisable ? (
    children
  ) : (
    // TODO: swap with a redirect component instead
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
}
