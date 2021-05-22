import axios from 'axios';
import { API_URL } from './constants';
import { history } from '../../history';

const HTTP = axios.create({
  baseURL: `${API_URL}/api/`,
  withCredentials: true
});

HTTP.interceptors.request.use(
  (config) => {
    const { jwtToken } = localStorage;
    if (!jwtToken) {
      return config;
    }
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        common: {
          ...config.headers.common,
          'Content-Type': 'application/json; charset=utf-8'
        },
        post: {
          ...config.headers.post,
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    };
  },
  (error) => Promise.reject(error)
);

// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status === 401) {
      delete localStorage.jwtToken;
      history.push('/singIn');
    }
    return Promise.reject(error);
  }
);

export default HTTP;
