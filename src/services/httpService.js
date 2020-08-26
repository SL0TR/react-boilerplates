import axios from 'axios';
import { message } from 'antd';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
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
