import axios from 'axios';
import { message } from 'antd';
import { store } from 'store';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(function (config) {
  const state = store.getState();

  const token = `token ${state?.Auth?.token}`;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

http.interceptors.response.use(null, error => {
  if (error?.response?.message) {
    message.error(error.response.message);
    return { error };
  }

  message.error('Something went wrong!');

  return { error };
});

export default http;
