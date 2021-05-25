import { put, takeLatest, takeEvery, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as api from '../api';
import * as actions from '../actions';
import * as I from './interfaces';
import * as CONST from './constants';
import { history } from '../history';
import { IFetchUsersXslAction } from './interfaces';

function* fetchUsers() {
  try {
    const response: AxiosResponse<I.IFetchUsersResponse> = yield call(api.fetchUsers);
    const users = response.data as I.IUsers;
    yield put(actions.setUsers(users));
  } catch(e) {}
}

function* fetchUser(action: I.IFetchUserAction) {
  const { payload: id } = action;

  try {
    const response: AxiosResponse<I.IFetchUserResponse> = yield call(api.fetchUser, id);
    const user = response.data as I.IUser;
    yield put(actions.setUser(user));
  } catch(e) {}
}

function* fetchUserAdd(action: I.IFetchUserAddAction) {
  const { payload } = action;

  try {
    const response: AxiosResponse<I.IFetchUserAddResponse> = yield call(api.fetchUserAdd, payload);
    history.push('/users');
  } catch(e) {}
}

function* fetchUserEdit(action: I.IFetchUserEditAction) {
  const { payload } = action;
  const { id, data } = payload;

  try {
    const response: AxiosResponse<I.IFetchUserEditResponse> = yield call(api.fetchUserEdit, id, data);
    history.push('/users');
  } catch (e) {}
}

function* fetchUserDelete(action: I.IFetchUserDeleteAction) {
  const { payload: id } = action;

  try {
    const response: AxiosResponse<I.IFetchUserDeleteResponse> = yield call(api.fetchUserDelete, id);
    yield put(actions.fetchUsers());
  } catch (e) {}
}

function* fetchUsersXsl(action: I.IFetchUsersXslAction) {
  const { file } = action.payload;

  try {
    const response: AxiosResponse<I.IFetchUsersXslResponse> = yield call(api.fetchUsersXsl, { file });
    console.log({ response });
  } catch (e) {}
}

export default function* () {
  yield takeLatest(CONST.FETCH_USER_ADD, fetchUserAdd);
  yield takeLatest(CONST.FETCH_USER_EDIT, fetchUserEdit);
  yield takeLatest(CONST.FETCH_USER_DELETE, fetchUserDelete);
  yield takeLatest(CONST.FETCH_USERS, fetchUsers);
  yield takeLatest(CONST.FETCH_USER, fetchUser);
  yield takeEvery(CONST.FETCH_USERS_XSL, fetchUsersXsl);
}
