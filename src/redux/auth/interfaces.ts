import * as CONST from './constants';
import { IResponse } from '../../intefaces';
import { FC } from 'react';

export interface ISingInFormValues {
  email: string;
  password: string;
}

export interface IFetchSingInAction {
  type: typeof CONST.FETCH_SING_IN,
  payload: ISingInFormValues
}

export interface ISingInFormResponseSuccess {
  jwtToken: string;
}

export type ISingInFormResponse = IResponse<ISingInFormResponseSuccess>;

export interface IRouteItem {
  path: string;
  component: FC,
  exact?: boolean;
  isLogin?: boolean;
  layout?: FC
}

export type IRouter = Array<IRouteItem>;
