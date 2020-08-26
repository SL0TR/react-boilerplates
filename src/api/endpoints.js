import config from 'config';

export const apiUrl = `${config.BACKEND_ROOT_URL}/api/v1/`;

export const authUrl = `${apiUrl}rest/`;

export const testApi = 'https://jsonplaceholder.typicode.com/posts/1';

export const loginUrl = `${authUrl}login/`;
