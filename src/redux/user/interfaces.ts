import { IResponse } from '../../intefaces';
import { Roles } from '../../intefaces/role';
import * as CONST from './constants';

export interface IUserAddFormValues {
  fio?: string;
  companyId?: number | string;
  role?: string;
  email?: string;
  group?: string;
  password?: string;
}

export interface IUser {
  id: string | number;
  fio: string;
  companyId?: string | number;
  company?: string;
  roles?: Array<Roles>;
  email: string;
  group?: string;
  invitationAt: string;
  status: number;
}

export type IUsers = Array<IUser>;

export interface IUserState {
  list?: IUsers;
  userActive?: IUser
}

// Add User
export interface IFetchUserAddAction {
  type: typeof CONST.FETCH_USER_ADD,
  payload: IUserAddFormValues
}

export type IFetchUserAddResponse = IResponse<IUser>;

// Edit User
export interface IFetchUserEditAction {
  type: typeof CONST.FETCH_USER_EDIT,
  payload: {
    id: number | string;
    data: IUserAddFormValues;
  }
}

export type IFetchUserEditResponse = IResponse<IUser>;

// Delete User
export interface IFetchUserDeleteAction {
  type: typeof CONST.FETCH_USER_DELETE;
  payload: number | string;
}

export type IFetchUserDeleteResponse = IResponse<unknown>;

// FETCH USERS
export type IFetchUsersResponse = IResponse<IUsers>;

// FETCH USER
export interface IFetchUserAction {
  type: typeof CONST.FETCH_USER,
  payload: string | number;
}
export type IFetchUserResponse = IResponse<IUser>;

// FETCH USERS XSL
export interface IFetchUsersXslPayload {
  file: File
}
export interface IFetchUsersXslAction {
  type: typeof CONST.FETCH_USERS_XSL,
  payload: IFetchUsersXslPayload
}
export type IFetchUsersXslResponse = IResponse<unknown>;
