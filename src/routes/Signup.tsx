import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';
import SimpleForm, { Field } from '../components/form/Form';
import useAuth from '../hooks/useAuth';
import { callSignupAPI } from '../apis/userAPIs';

const SignupCont = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Presentation */
`;

// TODO: Repeated styling pull up into a wrapper component for simple form
const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 17rem;
  min-height: wrap-content;
  justify-content: space-around;

  /* Presentation */

  /* Inner classes */
  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      display: flex;
      flex-direction: column;
      border: none;
      border-bottom: solid 1.5px black;
      border-radius: 2px;
      background-color: #dbdbdb;
    }

    label {
      margin: 1rem 0;
    }

    button {
      width: 7rem;
      height: 1.4rem;
      background-color: white;
      color: #4caf50;
      border: none;
      border: solid 1px #4caf50;
      border-radius: 2px;
      transition-duration: 0.4s;
    }

    button:hover {
      background-color: #4caf50;
      color: black;
      cursor: pointer;
    }
  }

  h4 {
    text-align: center;
  }
`;

interface ISignupProps {}

type signupData = {
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
};

function Signup(): JSX.Element {
  const [error, setError] = React.useState<string>();
  const [success, setSuccess] = React.useState<boolean>(false);

  const signupFormFields: Field[] = [
    {
      name: 'First Name',
      size: 'med',
      type: 'text',
      style: {},
      required: true,
      key: 'firstname',
    },
    {
      name: 'Last Name',
      size: 'med',
      type: 'text',
      style: {},
      key: 'lastname',
    },
    {
      name: 'Email',
      size: 'med',
      type: 'email',
      style: {},
      required: true,
      key: 'email',
    },
    {
      name: 'Username',
      size: 'med',
      type: 'text',
      style: {},
      required: true,
      key: 'username',
    },
    {
      name: 'Password',
      size: 'med',
      type: 'password',
      style: {},
      required: true,
      key: 'password',
    },
  ];

  let navigate = useNavigate();
  let auth = useAuth();

  async function submitSignup(signupData: signupData) {
    const username = signupData.username;
    const password = signupData.password;

    try {
      // if successful call login with data entered from username and password
      await callSignupAPI(signupData);

      auth.login({ username, password }, () => {
        console.log('login successful');
        setSuccess(true);
        setTimeout(() => navigate('/dashboard', { replace: true }), 1000);
      });
    } catch (error) {
      console.log('error in signup component', error);
      console.log('There was an issue trying to signup');

      if (error instanceof Error) {
        // If there was an issue trying to login navigate the user to the login page and allow them to attempt again

        if (error.name === 'LoginError') {
          setSuccess(true);
          setTimeout(() => navigate('/login', { replace: true }), 1000);
        }

        if (error.name === 'SignupError') {
          setError('There was an error signing up, please try again later');
        }

        if (error.name === 'ValidationError') {
          // What kind of validation errors would be returned from serverside?: (Username exists, email exists)
          setError('There was an error with the form below: ' + error.message);
        }
      }
    }
  }

  return (
    <SignupCont>
      {/* TODO: maybe i shouldnt use a card for the container for this form */}
      <Card height="50rem">
        <FormArea className="form-area">
          <h4>Signup</h4>
          {error && <div>{error}</div>}
          {success && <div>Signup successful</div>}
          <SimpleForm
            submitAction={submitSignup}
            fieldItems={signupFormFields}
            className="signup-form"
          />
        </FormArea>
      </Card>
    </SignupCont>
  );
}

export default Signup;
