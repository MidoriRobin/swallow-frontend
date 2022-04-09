import React from 'react';

interface IUserContext {
  user: { email: string; jwt: string; loggedIn: boolean };
  login: (
    loginInfo: { username: string; password: string },
    callback: VoidFunction,
  ) => void;
  logout: (callback: VoidFunction) => void;
}

//? "null!" indicates that the value cannot be null here. reference: https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci
const UserContext = React.createContext<IUserContext>(null!);

export { UserContext };
