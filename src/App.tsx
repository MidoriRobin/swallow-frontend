import React, { useDebugValue } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainRouter from './routes';
import { useState } from 'react';
import { UserContext } from './utils/context';
import { callLoginAPI, callLogoutAPI } from './utils/backend';

interface IUser {
  username: string;
  jwt: string;
  loggedIn: boolean;
}

function App() {
  const nullUser: IUser = { username: '', jwt: '', loggedIn: false };

  const [user, setUser] = useState<IUser>(nullUser);

  useDebugValue(user.username === null ? 'No User' : user?.username);

  /**
   *
   * @param loginInfo
   * @param callback
   */
  function login(
    loginInfo: { username: string; password: string },
    callback: VoidFunction,
  ) {
    console.log('Login info recieved');

    let userResult = { username: '', jwt: '', loggedIn: false };
    console.log('login info: ', loginInfo);

    try {
      const { username, jwt } = callLoginAPI(loginInfo);

      userResult.username = username;
      userResult.jwt = jwt;

      setUser({ ...userResult, loggedIn: true });
      return callback();
    } catch (error) {
      console.log('An error occurred trying to login', error);
      throw error;
    }
  }

  function logout(callback: VoidFunction) {
    // TODO: call logout api and upon success clear user state and run callback
    // return logoutAuth(logoutInfo, () => {
    //   setUser(nullUser);
    // })

    try {
      callLogoutAPI(user.jwt);
      setUser(nullUser);
      return callback();
    } catch (error) {
      console.log('There was some issue trying to log out');
    }
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
