import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import BackG from '../assets/images/Mass Circles - Opt.svg';
import Card from '../components/card/Card';
import SimpleForm from '../components/form/Form';
import useAuth from '../hooks/useAuth';
import useMediaQuery from '../hooks/useMediaQuery';

const LoginCont = styled.div`
  /* Layout */
  display: flex;
  height: inherit;
  align-items: center;

  /* Presentation */
  /*TODO: Figure out why this is not renedering */
  background: url(${BackG});

  .form-area {
    display: flex;
    flex-direction: column;
    height: 15rem;
    justify-content: space-around;
  }

  .login-form {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      width: 50%;
    }
  }

  h3 {
    text-align: center;
  }
`;

const ErrorCont = styled.div`
  /* Layout */
  margin: 1rem auto;
  padding: 0.3rem 1rem;

  /* Presentation */
  border-radius: 0.3rem;
  background-color: red;
  color: white;
`;

const SuccessCont = styled.div`
  /* Layout */
  margin: 1rem auto;
  padding: 0.3rem 1rem;

  /* Presentation */
  border-radius: 0.3rem;
  background-color: green;
  color: white;
`;

function Login(): JSX.Element {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  let navigate = useNavigate();
  let auth = useAuth();

  function submitLogin({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    try {
      setError(false);
      auth.login({ username, password }, () => {
        console.log('login successful');
        setSuccess(true);
        setTimeout(() => navigate('/dashboard', { replace: true }), 1000);
      });
    } catch (error) {
      console.log('error in login component', error);
      setError(true);
    }
  }

  return (
    <LoginCont className="login-container">
      <Card height="20rem">
        <div className="form-area">
          <h3>Login</h3>
          {error && <ErrorCont>There was an error trying to login</ErrorCont>}
          {success && <SuccessCont>Login successful!</SuccessCont>}
          <SimpleForm submitAction={submitLogin} className="login-form" />
        </div>
      </Card>
    </LoginCont>
  );
}

export default Login;
