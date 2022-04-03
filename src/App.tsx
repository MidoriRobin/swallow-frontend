import React, { useDebugValue } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Navbar from './components/navbar/index';
import MainRouter from './routes';
import { useContext, useState } from 'react';
import { UserContext } from './utils/context';

interface IUser {
  email: string | null;
  jwt: string | null;
  loggedIn: boolean;
}

function App(): JSX.Element {
  const nullUser: IUser = { email: null, jwt: null, loggedIn: false };

  const [user, setUser] = useState<IUser>(nullUser);

  useDebugValue(user?.email === null ? 'No User' : user.email);

  const contextValue = {
    user,
    logout,
    login,
  };

  function logout() {
    setUser(nullUser);
  }

  function login(user: IUser) {
    setUser(user);
  }

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <Navbar isLoggedIn={user.loggedIn}>
          <MainRouter />
        </Navbar>
        {/* <div>Test</div> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
