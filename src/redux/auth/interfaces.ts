import * as CONST from './constants';

export interface ISingInFormValues {
  email: string;
  password: string;
}

export interface IFetchSingInAction {
  type: typeof CONST.FETCH_SING_IN,
  payload: ISingInFormValues
}

export interface ISingInFormResponse {
  type: string;
}
