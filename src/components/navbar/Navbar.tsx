import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as SwallowIcon } from '../../assets/icons/swallow.svg';
import home from '../../assets/icons/icons8-home-page-24.png';
import projects from '../../assets/icons/icons8-group-of-projects-24.png';
import about from '../../assets/icons/icons8-info-24.png';
import login from '../../assets/icons/icons8-login-24.png';
import signout from '../../assets/icons/icons8-sign-out-24.png';
import signup from '../../assets/icons/icons8-sign-up-24.png';
import tasklist from '../../assets/icons/icons8-tasklist-24.png';
import user from '../../assets/icons/icons8-user-24.png';

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const NavWrap = styled.div`
  display: flex;
  background-color: white;
  height: 2rem;
  justify-content: space-between;
  padding: 0 2rem;
`;

const NavMain = styled.nav`
  /* Layout */
  display: flex;
  height: inherit;
  justify-content: flex-end;
  align-items: center;

  /* Presentation */
  a {
    text-decoration: none;
    font-size: 17px;
    color: black;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      padding: 0 0.5rem;
    }
  }

  color: black;
`;

const NavButtons = styled.div`
  /* Layout */
  display: flex;
  flex-direction: row;
`;

const NavIcon = styled.div`
  display: flex;
  width: 8rem;
  align-items: center;
  justify-content: space-between;
  /* font-weight: 500; */
  h1 {
    font-size: 1.4rem;
  }
`;

function Navbar({
  isLoggedIn,
  children,
}: {
  isLoggedIn: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavWrap className="nav-wrapper">
      <NavIcon className="nav-icon">
        <SwallowIcon width="2rem" height="2rem" />
        <h1>Swallow</h1>
      </NavIcon>
      <NavMain className="nav-menu">
        {!isLoggedIn ? (
          <NavButtons className="nav-buttons">
            <a href="/">
              <img src={home} alt="Home Icon" />
              Home
            </a>{' '}
            <a href="/">
              <img src={about} alt="About Icon" /> About
            </a>{' '}
            <a href="/">
              <img src={login} alt="Login Icon" /> Login
            </a>{' '}
            <a href="/">
              <img src={signup} alt="Signup Icon" /> Signup
            </a>
          </NavButtons>
        ) : (
          <NavButtons className="nav-buttons">
            <a href="/">
              <img src={home} alt="Home Icon" /> Home
            </a>{' '}
            <a href="/">
              <img src={user} alt="Home Icon" /> Profile
            </a>{' '}
            <a href="/">
              <img src={projects} alt="Projects Icon" /> Projects
            </a>{' '}
            <a href="/">
              <img src={tasklist} alt="Tasks Icon" /> Tasks
            </a>{' '}
            <a href="/">
              <img src={signout} alt="Logout Icon" /> Logout
            </a>
          </NavButtons>
        )}
      </NavMain>
    </NavWrap>
  );
}

export default Navbar;
