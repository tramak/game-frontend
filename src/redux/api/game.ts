import { AxiosResponse } from 'axios';
import * as I from '../company/interfaces';
import agent from './agent';

export const fetchGame = (token: string): Promise<AxiosResponse<I.IFetchCompanyResponse>> => {
  return agent.GET(`/game/?token=${token}`);
};
