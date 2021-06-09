import * as I from './interfaces';
import * as CONST from './constants';
import { IFetchUserAddMeta, IFetchUserEditMeta } from './interfaces';

export const fetchUsers = () => ({
  type: CONST.FETCH_USERS
});

export const fetchUser = (id: number | string) => ({
  type: CONST.FETCH_USER,
  payload: id,
})

export const fetchUserAdd = (payload: I.IUserAddFormValues, meta: IFetchUserAddMeta) => ({
  type: CONST.FETCH_USER_ADD,
  payload,
  meta
});

export const fetchUserEdit = (id: number | string, data: I.IUserAddFormValues, meta: IFetchUserEditMeta) => ({
  type: CONST.FETCH_USER_EDIT,
  payload: {
    id,
    data
  },
  meta
});

export const fetchUserDelete = (id: number | string) => ({
  type: CONST.FETCH_USER_DELETE,
  payload: id
});

export const fetchUsersXsl = (file: File) => ({
  type: CONST.FETCH_USERS_XSL,
  payload: {
    file
  }
});
