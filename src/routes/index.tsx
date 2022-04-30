import styled from '@emotion/styled';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthHandler from '../components/auth/AuthHandler';
import { frontendUrls } from '../utils/urls';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Project from './Project';
import Projects from './Projects';
import Signup from './Signup';
import Task from './Task';
import Tasks from './Tasks';

const AppCont = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  min-height: 95vh;
  flex: 1 1 auto;

  /* Presentation */
`;

// interface IMainRouterProps {}

function MainRouter() {
  return (
    <AppCont className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={frontendUrls.dashboard}
          element={
            <AuthHandler>
              <Dashboard />
            </AuthHandler>
          }
        />
        <Route path={frontendUrls.login} element={<Login />} />
        <Route path={frontendUrls.signup} element={<Signup />} />
        <Route
          path={frontendUrls.profile}
          element={
            <AuthHandler>
              <Profile />
            </AuthHandler>
          }
        />
        <Route
          path={frontendUrls.projects}
          element={
            <AuthHandler>
              <Projects />
            </AuthHandler>
          }
        >
          <Route path=":id" element={<Project />} />
        </Route>
        <Route
          path={frontendUrls.tasks}
          element={
            <AuthHandler>
              <Tasks />
            </AuthHandler>
          }
        >
          <Route path=":id" element={<Task />} />
        </Route>
      </Routes>
    </AppCont>
  );
}

export default MainRouter;
