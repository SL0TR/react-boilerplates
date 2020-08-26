import { http } from 'services';
import { loginUrl, testApi } from './endpoints';

export const Auth = {
  login: data => http.post(loginUrl, data),
  test: () => http.get(testApi),
};
