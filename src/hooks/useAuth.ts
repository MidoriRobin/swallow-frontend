import React from 'react';
import { UserContext } from '../utils/context';

export default function useAuth() {
  return React.useContext(UserContext);
}
