import React from 'react';
import { UserContext } from '../utils/context';

// Use to access user auth context
export default function useAuth() {
  return React.useContext(UserContext);
}
