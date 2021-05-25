import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as actions from '../actions';
import * as I from './interfaces';
import * as api from '../api';
import * as CONST from './constants';
import { history } from '../history';
import { request, requestC } from '../utils/request';

function* fetchSingIn(action: I.IFetchSingInAction) {
  const { payload } = action;

  try {
    const response: AxiosResponse<I.ISingInFormResponse> = yield requestC([ api.fetchSingIn, action ], payload);
    // const response: AxiosResponse<I.ISingInFormResponse> = yield request(api.fetchSingIn, payload);
    const jwtToken = (response?.data as I.ISingInFormResponseSuccess).jwtToken;
    localStorage.jwtToken = jwtToken;
    yield put(actions.setToken({ jwtToken }));
    yield fetchGetProfile();
  } catch (e) {}
}

function* singOut() {
  delete localStorage.jwtToken;
  yield put(actions.clearToken());
  yield put(actions.clearProfile());
  history.push('/singIn');
}

function* fetchGetProfile() {
  try {
    const response: AxiosResponse<I.IGetProfileResponse> = yield call(api.fetchGetProfile);
    const profile = response?.data as I.IProfile;
    yield put(actions.setProfile(profile));
  } catch (e) {}
}

function* init() {
  yield put(actions.setToken({ jwtToken: localStorage.jwtToken }));
  if (localStorage.jwtToken) {
    yield fetchGetProfile();
  }
}

export default function* () {
  yield  init();
  yield takeLatest(CONST.FETCH_SING_IN, fetchSingIn);
  yield takeLatest(CONST.SING_OUT, singOut);
}
