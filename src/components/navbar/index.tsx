import * as React from 'react';

interface INavbarProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

const Navbar = (props: INavbarProps): JSX.Element => {
  return <div>{props.children}</div>;
};

export default Navbar;
