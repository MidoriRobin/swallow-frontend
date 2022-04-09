import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { UserContext } from '../../utils/context';

export interface IAuthHandlerProps {
  children: JSX.Element;
}

/**
 * Accepts a react node object and renders it if authorized user exists in context
 * @param param0
 * @returns
 */
export default function AuthHandler({ children }: IAuthHandlerProps) {
  let auth = React.useContext(UserContext);
  let location = useLocation();

  return !auth.user.loggedIn ? (
    <Navigate to={'/login'} state={{ from: location }} replace />
  ) : (
    children
  );
}
