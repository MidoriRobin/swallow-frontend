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
  let auth = useAuth();
  let location = useLocation();

  console.log('Auth info', auth);

  //TODO: make into an extension for the route component so it can be substituted for protected routes

  return !auth.user.loggedIn ? (
    <Navigate to={'/login'} state={{ from: location }} replace />
  ) : (
    children
  );
}
