// import * as CONST from './constants';
import { IResponse } from '../../intefaces';
import { Roles } from '../../intefaces/role';
import * as CONST from './constants';

export interface IAddUserFormValues {
  fio?: string;
  company?: string;
  role?: string;
  email?: string;
  group?: string;
  password?: string;
}

export interface IUser {
  id: string | number;
  fio: string;
  company?: string;
  role?: Roles;
  email: string;
  group?: string;
  invitationAt: string;
  status: number;
}

export type IUsers = Array<IUser>;

export interface IUserState {
  list?: IUsers;
}

export interface IFetchAddUserAction {
  type: typeof CONST.FETCH_ADD_USER,
  payload: IAddUserFormValues
}
