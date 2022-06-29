import axios, { AxiosResponse } from 'axios';
import { HTTPError } from './errors';

enum breakpoints {
  sml = 425,
  md = 768,
  lrg = 1024,
  xlrg = 1440,
}

type HTTPRequestTypes = 'put' | 'get' | 'post' | 'delete';

function reduceString(text: string): string {
  let textArray = text.split(' ');

  if (textArray.length > 10) {
    textArray.push('...');
    return textArray.slice(0, 10).join(' ');
  }

  return textArray.join(' ');
}

// TODO: complete and add comments
/**
 *
 * @param url
 * @returns
 */
async function makeHTTPRequest(
  url: string,
  requestType: HTTPRequestTypes,
  requestData?: JSON,
  isTest: boolean = false,
) {
  let response = await HTTPRequestSwitch(url, requestType, requestData);

  if (!['2', '3'].includes(String(response.status)[0])) {
    throw new HTTPError(
      'There was an issue making the request',
      response.status,
    );
  }

  let { data } = response;

  return data;
}

// TODO: add try catch for requests?
async function HTTPRequestSwitch(
  url: string,
  requestType: HTTPRequestTypes,
  requestData?: JSON,
) {
  let response: AxiosResponse;

  switch (requestType) {
    case 'get':
      response = await axios.get(url);

      break;

    case 'post':
      response = await axios.post(url, requestData);

      break;

    case 'put':
      response = await axios.put(url, requestData);

      break;

    case 'delete':
      response = await axios.delete(url);

      break;

    default:
      response = await axios.get(url);

      break;
  }

  return response;
}

export { breakpoints, reduceString, makeHTTPRequest };
