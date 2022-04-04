import React, { useState } from 'react';
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
import hamburger from '../../assets/icons/icons8-hamburger-menu-16.png';
import { useSpring, animated as a } from '@react-spring/web';
import useMediaQuery from '../../hooks/useMediaQuery';

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const breakpoints = [425, 768, 1024, 1440];

const NavWrap = styled.div`
  display: flex;
  background-color: var(--primary-color-light-200);
  height: 2rem;
  justify-content: space-between;
  padding: 0 1rem;

  @media (min-width: ${breakpoints[2]}px) {
    padding: 0 2rem;
  }
`;

const NavIcon = styled.div`
  display: flex;
  width: 8rem;
  height: 2rem;
  align-items: center;
  justify-content: space-between;
  /* font-weight: 500; */
  h1 {
    font-size: 1.4rem;
  }
`;

const NavMain = styled(a.nav)`
  /* Layout */
  display: flex;
  position: absolute;
  /* height: 30rem;
  width: 30rem; */
  height: 0;
  width: 0;

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

  @media (min-width: ${breakpoints[2]}px) {
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

const NavButtons = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
  }
`;

const MenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  /* Presentation */
  background-color: rgba(255, 0, 0, 0);
  border: none; /* Remove borders */
  font-size: 16px; /* Set a font size */
  cursor: pointer;

  @media (min-width: ${breakpoints[2]}px) {
    display: none;
    background-color: black;
  }
`;

function Navbar({
  isLoggedIn,
  children,
  isCollapsed,
}: {
  isLoggedIn: boolean;
  children?: React.ReactNode;
  isCollapsed?: boolean;
}) {
  // TODO: set to true when isDesktop
  const [dropdown, setDropdown] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const dropdownProps = useSpring({
    width: dropdown ? 0 : '30rem',

    //! Adding an isDesktop check to adjust for larger breakpoints (rough impl.)
    height: dropdown ? 0 : isDesktop ? 'auto' : '30rem',
  });

  // https://blog.logrocket.com/animations-with-react-spring/ https://codingstatus.com/how-to-display-images-in-react-js/

  return (
    <NavWrap role="navigation" className="nav-wrapper">
      <NavIcon className="nav-icon">
        <SwallowIcon width="2rem" height="2rem" />
        <h1>Swallow</h1>
      </NavIcon>
      <MenuBtn
        className="main-menu-btn"
        onClick={() => setDropdown((prevVal) => !prevVal)}
      >
        <img src={hamburger} alt="Home Icon" />
      </MenuBtn>
      {(dropdown || isDesktop) && (
        // TODO: fix animation erroring out in console
        <NavMain className="nav-menu" style={dropdownProps}>
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
      )}
    </NavWrap>
  );
}

export default Navbar;
