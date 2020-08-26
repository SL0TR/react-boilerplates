import { http } from 'services';
import { loginUrl } from './endpoints';

export const Auth = {
  login: data => http.post(loginUrl, data),
};
