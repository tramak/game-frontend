import * as I from './interfaces';
import * as CONST from './constants';

export const fetchUsers = () => ({
  type: CONST.FETCH_USERS
});

export const fetchUser = (id: number | string) => ({
  type: CONST.FETCH_USER,
  payload: id,
})

export const fetchUserAdd = (payload: I.IUserAddFormValues) => ({
  type: CONST.FETCH_USER_ADD,
  payload
});

export const fetchUserEdit = (id: number | string, data: I.IUserAddFormValues) => ({
  type: CONST.FETCH_USER_EDIT,
  payload: {
    id,
    data
  }
});

export const fetchUserDelete = (id: number | string) => ({
  type: CONST.FETCH_USER_DELETE,
  payload: id
});
