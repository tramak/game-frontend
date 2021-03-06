import * as CONST from './constants';
import { IErrors, IResponse, PromisifiedMetaAction } from '../../intefaces';
import { FC } from 'react';
import { Roles } from '../../intefaces/role';

export interface IProfile {
  fio: string;
  email: string;
  photo: string;
  roles: Array<Roles>,
  status: string;
  companyId?: number | string;
}

export interface IAuthState {
  token?: {
    access: string;
  };
  profile?: IProfile;
}

export interface ISingInFormValues {
  email: string;
  password: string;
}

export interface IFetchSingInAction extends PromisifiedMetaAction<ISingInFormResponseSuccess, IErrors> {
  type: typeof CONST.FETCH_SING_IN,
  payload: ISingInFormValues,
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
  layout?: FC;
  allow?: Array<Roles>;
}

export type IRouter = Array<IRouteItem>;

// GET Profile
export type IGetProfileResponse = IResponse<IProfile>;
