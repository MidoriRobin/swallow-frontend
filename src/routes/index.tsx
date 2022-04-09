import styled from '@emotion/styled';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Project from './Project';
import Projects from './Projects';
import Signup from './Signup';
import Tasks from './Tasks';

const AppCont = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  height: 95vh;

  /* Presentation */
`;

// interface IMainRouterProps {}

function MainRouter(): JSX.Element {
  return (
    <AppCont className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </AppCont>
  );
}

export default MainRouter;
