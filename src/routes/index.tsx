import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Project from './Project';
import Projects from './Projects';
import Signup from './Signup';
import Tasks from './Tasks';

// interface IMainRouterProps {}

function MainRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route path="projects" element={<Projects />} />
      <Route path="project/:id" element={<Project />} />
      <Route path="tasks" element={<Tasks />} />
    </Routes>
  );
}

export default MainRouter;
