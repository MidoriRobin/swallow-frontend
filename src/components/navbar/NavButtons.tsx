//!!! WIP
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { a, useSpring } from '@react-spring/web';
import { breakpoints } from '../../utils/helper';
import useMediaQuery from '../../hooks/useMediaQuery';
import home from '../../assets/icons/icons8-home-page-24.png';
import projects from '../../assets/icons/icons8-group-of-projects-24.png';
import about from '../../assets/icons/icons8-info-24.png';
import login from '../../assets/icons/icons8-login-24.png';
import signout from '../../assets/icons/icons8-sign-out-24.png';
import signup from '../../assets/icons/icons8-sign-up-24.png';
import tasklist from '../../assets/icons/icons8-tasklist-24.png';
import user from '../../assets/icons/icons8-user-24.png';
import hamburger from '../../assets/icons/icons8-hamburger-menu-16.png';

const NavMain = styled(a.nav)`
  /* Layout */
  display: flex;
  position: absolute;
  /* height: 30rem;
  width: 30rem; */
  height: 0;
  width: 0;
  z-index: inherit;

  /* Presentation */
  overflow: hidden;
  background-color: var(--secondary-color-light-300);

  a {
    display: flex;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    color: var(--secondary-color-light-100);
    padding: 1rem;
    justify-content: center;
    align-items: center;

    img {
      padding: 0 0.5rem;
    }
  }

  @media (min-width: ${breakpoints.lrg}px) {
    position: static;
    height: auto;
    justify-content: flex-end;
    align-items: center;

    background-color: inherit;

    a {
      flex-direction: row;
    }
  }

  color: var(--secondary-color);
`;

const NavBtns = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.lrg}px) {
    flex-direction: row;
  }
`;

export interface INavButtonsProps {}

export function NavButtons(props: INavButtonsProps) {
  const [dropdown, setDropdown] = useState(false);
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lrg}px)`);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownProps = useSpring({
    width: dropdown ? 0 : '30rem',

    //! Adding an isDesktop check to adjust for larger breakpoints (rough impl.)
    height: dropdown ? 0 : isDesktop ? 'auto' : '30rem',
  });

  return (
    <>
      <NavMain className="nav-menu" style={dropdownProps}>
        {!isLoggedIn ? (
          <NavBtns className="nav-buttons">
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
          </NavBtns>
        ) : (
          <NavBtns className="nav-buttons">
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
          </NavBtns>
        )}
      </NavMain>
    </>
  );
}
