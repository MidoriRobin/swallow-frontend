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
import { useTransition, animated as a } from '@react-spring/web';
import useMediaQuery from '../../hooks/useMediaQuery';
import { breakpoints } from '../../utils/helper';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const NavWrap = styled.div`
  display: flex;
  height: 2rem;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 1;

  background-color: var(--primary-color-light-200);

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

  :hover {
    cursor: pointer;
  }
`;

const NavMain = styled(a.nav)`
  /* Layout */
  display: flex;
  position: absolute;
  /* height: 30rem;
  width: 30rem; */
  /* height: 15rem; */
  min-height: fit-content;
  width: 15rem;
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

  @media (min-width: ${breakpoints[2]}px) {
    position: static;
    height: auto;
    width: fit-content;
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
  z-index: 3;

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

/**
 * Comunicates the relevant nav links to be rendered as a nav bar component
 * TODO: Convert to a more modular component which accepts only a list of components to be rendered as nav buttons and a home icon
 * @param param0 Props indicating
 * @returns
 */
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
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints[2]}px)`);
  const auth = useAuth();

  let navigate = useNavigate();

  const transitions = useTransition(dropdown, {
    from: { left: '30rem' },
    enter: { left: '15rem' },
    leave: { left: '30rem' },
    delay: 200,
  });

  function handleLogout(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log('Logging out..');

    auth.logout(() => navigate('/', { replace: true }));
  }

  //TODO: Export into its own component to be imported here
  const NavBtns = (styles?: {}) => (
    <NavMain className="nav-menu" style={styles}>
      {!isLoggedIn ? (
        <NavButtons className="nav-buttons" onClick={() => setDropdown(false)}>
          <Link to="/">
            <img src={home} alt="Home Icon" />
            Home
          </Link>{' '}
          <Link to="about">
            <img src={about} alt="About Icon" /> About
          </Link>{' '}
          <Link to="login">
            <img src={login} alt="Login Icon" /> Login
          </Link>{' '}
          <Link to="signup">
            <img src={signup} alt="Signup Icon" /> Signup
          </Link>
        </NavButtons>
      ) : (
        <NavButtons className="nav-buttons">
          <Link to="/">
            <img src={home} alt="Home Icon" /> Home
          </Link>{' '}
          <Link to="profile">
            <img src={user} alt="Home Icon" /> Profile
          </Link>{' '}
          <Link to="projects">
            <img src={projects} alt="Projects Icon" /> Projects
          </Link>{' '}
          <Link to="tasks">
            <img src={tasklist} alt="Tasks Icon" /> Tasks
          </Link>{' '}
          <Link to="/" onClick={handleLogout}>
            <img src={signout} alt="Logout Icon" /> Logout
          </Link>
        </NavButtons>
      )}
    </NavMain>
  );

  // https://blog.logrocket.com/animations-with-react-spring/ https://codingstatus.com/how-to-display-images-in-react-js/

  return (
    <NavWrap role="navigation" className="nav-wrapper">
      <NavIcon className="nav-icon" onClick={() => navigate('/')}>
        <SwallowIcon width="2rem" height="2rem" />
        <h1>Swallow</h1>
      </NavIcon>
      <MenuBtn
        type="button"
        className="main-menu-btn"
        onClick={() => setDropdown((prevVal) => !prevVal)}
      >
        <img src={hamburger} alt="Home Icon" />
      </MenuBtn>
      {transitions((styles, item) => item && NavBtns(styles))}
      {isDesktop && NavBtns()}
    </NavWrap>
  );
}

export default Navbar;
