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
    throw new Error('LogoutError');
  }

  try {
    //   Api call goes here
  } catch (error) {
    throw new Error('LoginError');
  }

  return { username, jwt };
}

function callLogoutAPI(jwt: string) {
  try {
    // Some axios call
  } catch (error) {
    throw new Error('LogoutError');
  }
}

export { callLoginAPI };
