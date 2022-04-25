import {
  LoginError,
  LogoutError,
  SignupError,
  ValidationError,
} from './errors';

/**
 * TODO: Replace with actual api call
 * @param param0 An object containing username and password
 * @returns An object containing the username and a jwt token from the post request response.
 */
function callLoginAPI({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  console.log('Calling login api..');

  let isValid = false;
  let jwt = 'sometoken';

  console.log('username', username);
  console.log('password', password);

  if (username === 'midori' && password === 'password1') {
    isValid = true;
  } else {
    throw new LoginError('Invalid credentials');
  }

  try {
    //   Api call goes here
  } catch (error) {
    throw new LoginError('There was an issue logging in');
  }

  return { username, jwt };
}

/**
 * TODO: Replace with actual api call
 * @param jwt string with the jwt of the logged in user
 */
function callLogoutAPI(jwt: string) {
  try {
    // Some axios call with jwt
    if (jwt !== 'sometoken') {
      throw new LogoutError('Invalid credentials');
    }
  } catch (error) {
    throw new LogoutError('There was some issue logging out');
  }
}

/**
 *
 * @param signupData an object containing the data required to create a user
 * @returns nothing
 */
function callSignupAPI(signupData: {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}) {
  console.log('signup data', signupData);
  try {
    // some axios call with formdata
    if (signupData.username.toLowerCase() === 'midorirobin') {
      return;
    } else {
      // the error message should be based on a response from the server side
      throw new ValidationError('The data entered is not valid');
    }
  } catch (error) {
    // Some issue with signing up
    console.log(error);
    // communicate errors from here
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new SignupError('There was an error trying to call the signup api');
  }
}

export { callLoginAPI, callLogoutAPI, callSignupAPI };
