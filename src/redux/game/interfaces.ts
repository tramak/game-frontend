import * as CONST from './constants';
import { IResponse } from '../../intefaces';

export interface IFetchGameAction {
  type: typeof CONST.FETCH_GAME,
  payload: string;
}

export interface IFetchGameSuccess {
  statusCode: number;
  body: {
    url?: string;
    error?: string;
  };
  headers: {
    [name: string]: string;
  }
}

export type IFetchGameResponse = IResponse<IFetchGameSuccess>;
