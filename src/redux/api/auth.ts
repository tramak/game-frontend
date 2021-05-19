import agent from './agent';
import * as I from '../auth/interfaces';
import { AxiosResponse } from 'axios';

export const fetchSingIn = (data: I.ISingInFormValues): Promise<AxiosResponse<I.ISingInFormResponse>> => {
  return agent.POST('/auth/login', data);
};
