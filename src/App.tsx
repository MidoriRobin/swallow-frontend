import React, { useDebugValue, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainRouter from './routes';
import { useState } from 'react';
import { UserContext } from './utils/context';
import { callLoginAPI, callLogoutAPI } from './utils/backend';
import { useLocation, useNavigate } from 'react-router-dom';

interface IUser {
  username: string;
  jwt: string;
  loggedIn: boolean;
}

function App() {
  const nullUser: IUser = { username: '', jwt: '', loggedIn: false };

  const [user, setUser] = useState<IUser>(nullUser);

  let navigate = useNavigate();
  let location = useLocation();

  useDebugValue(user.username === null ? 'No User' : user?.username);

  useEffect(() => {
    // Either store data breifly in session storage, or save data to db and refetch using api call

    if (user.loggedIn) {
      window.onbeforeunload = () => {
        localStorage.setItem('dataBefore', JSON.stringify(user));
        localStorage.setItem('locationBefore', location.pathname);
        localStorage.setItem('pageReloaded', 'true');
      };
    }

    //? Is this a security concern: brief use of localstorage
    if (localStorage.getItem('dataBefore')) {
      setUser(JSON.parse(localStorage!.getItem('dataBefore') || '{}'));
      navigate(localStorage!.getItem('locationBefore') || '', {
        replace: true,
      });
      // console.log(JSON.parse(localStorage!.getItem('dataBefore') || '{}'));
      localStorage.removeItem('dataBefore');
      localStorage.removeItem('locationBefore');
    }
  }, [user, location.pathname, navigate]);

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
