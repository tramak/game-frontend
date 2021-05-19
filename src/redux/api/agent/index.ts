import { AxiosResponse } from 'axios';
import axios from './axios';

const timeout = 60000;

const headers = {
  'Content-Type': 'application/json;charset=utf-8'
};

export default {
  POST<T, R = any>(path: string, data?: T) {
    return axios.post(`${path}`, data, { timeout, headers }) as Promise<AxiosResponse<R>>;
  },

  PUT<T, R = any>(path: string, data?: T) {
    return axios.put(`${path}`, data, { timeout }) as Promise<AxiosResponse<R>>;
  },

  PATCH<T, R = any>(path: string, data?: T) {
    return axios.patch(`${path}`, data, { timeout }) as Promise<AxiosResponse<R>>;
  },

  GET<T, R = any>(path: string, params?: T) {
    return axios.get(`${path}`, {
      params,
      timeout
    }) as Promise<AxiosResponse<R>>;
  },

  DELETE<T, R = any>(path: string, params?: T) {
    return axios.delete(`${path}`, {
      params,
      timeout
    }) as Promise<AxiosResponse<R>>;
  }
};
