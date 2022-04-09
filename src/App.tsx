import React, { useDebugValue } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainRouter from './routes';
import { useState } from 'react';
import { UserContext } from './utils/context';

interface IUser {
  email: string;
  jwt: string;
  loggedIn: boolean;
}

function App(): JSX.Element {
  const nullUser: IUser = { email: '', jwt: '', loggedIn: false };

  const [user, setUser] = useState<IUser>(null!);

  useDebugValue(user?.email === null ? 'No User' : user.email);

  /**
   *
   * @param loginInfo
   * @param callback
   */
  function login(
    loginInfo: { username: string; password: string },
    callback: VoidFunction,
  ) {
    // TODO: call login api and return data into user object
    // Upon calling login api pass the required login data from result into the user state (email and jwt)
    // return loginAuth(loginInfo, () => {
    //  setUser(loggedInUser);
    // })
  }

  function logout(callback: VoidFunction) {
    // TODO: call logout api and upon success clear user state and run callback
    // return logoutAuth(logoutInfo, () => {
    //   setUser(nullUser);
    // })
  }

  let contextValue = { user, login, logout };

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <Navbar isLoggedIn={user.loggedIn} />
        <MainRouter />
      </UserContext.Provider>
    </>
  );
}

export default App;
