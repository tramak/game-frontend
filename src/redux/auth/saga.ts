import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as actions from '../actions';
import * as I from './interfaces';
import * as api from '../api';

function* fetchSingIn(action: I.IFetchSingInAction) {
  const { payload } = action;

  try {
    const response: AxiosResponse<I.ISingInFormResponse> = yield call(api.fetchSingIn, payload);
    console.log({ response });
    const jwtToken = (response?.data as I.ISingInFormResponseSuccess).jwtToken;
    localStorage.jwtToken = jwtToken;
    yield put(actions.setToken({ jwtToken }));
  } catch (e) {

  }
}

export default function* () {
  yield takeLatest(actions.fetchSingIn, fetchSingIn);
}
