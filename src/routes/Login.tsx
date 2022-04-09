import styled from '@emotion/styled';
import * as React from 'react';
import BackG from '../assets/images/Mass Circles - Opt.svg';
import Card from '../components/card/Card';
import SimpleForm from '../components/form/Form';
import useMediaQuery from '../hooks/useMediaQuery';

const LoginCont = styled.div`
  /* Layout */
  display: flex;
  height: inherit;
  align-items: center;

  /* Presentation */
  /*TODO: Figure out why this is not renedering */
  background: url(${BackG});
`;

function Login(): JSX.Element {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <LoginCont className="login-container">
      <Card height="20rem">
        <h3>Login</h3>
        <SimpleForm />
      </Card>
    </LoginCont>
  );
}

export default Login;
