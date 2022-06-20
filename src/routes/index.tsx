import styled from '@emotion/styled';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthHandler from '../components/auth/AuthHandler';
import { breakpoints } from '../utils/helper';
import { frontendUrls } from '../utils/urls';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Project from './Project';
import { ProjectForm } from './ProjectForm';
import Projects from './Projects';
import Signup from './Signup';
import Task from './Task';
import { TaskForm } from './TaskForm';
import Tasks from './Tasks';

const AppCont = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  flex: 1 1 auto;

  /* Presentation */

  @media (min-width: ${breakpoints.lrg}px) {
    padding: 0 5rem;
  }

  @media (min-width: ${breakpoints.xlrg}px) {
    padding: 0 10rem;
  }
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
        {/* Project Route */}
        <Route path={frontendUrls.projects}>
          <Route
            index
            element={
              <AuthHandler>
                <Projects />
              </AuthHandler>
            }
          />
          <Route path={`:projId`} element={<Project />} />
          <Route path={`new`} element={<ProjectForm />} />
        </Route>
        {/* Tasks Route */}
        <Route path={frontendUrls.tasks}>
          <Route
            index
            element={
              <AuthHandler>
                <Tasks />
              </AuthHandler>
            }
          />
          <Route path=":id" element={<Task />} />
          <Route path="new" element={<TaskForm />} />
        </Route>
      </Routes>
    </AppCont>
  );
}

export default MainRouter;
