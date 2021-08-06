import { authUrl } from 'api/endpoints';
import { http } from 'services';

export const testApi = 'https://jsonplaceholder.typicode.com/posts/1';

export const loginUrl = `${authUrl}login/`;

export const Auth = {
  login: data => http.post(loginUrl, data),
  test: () => http.get(testApi),
};
