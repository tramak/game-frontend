import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as I from './interfaces';
import * as api from '../api';
import { AxiosResponse } from 'axios';

function* fetchSingIn(action: I.IFetchSingInAction) {
  const { payload } = action;
  console.log({ action });

  try {
    const response: AxiosResponse<I.ISingInFormResponse> = yield call(api.fetchSingIn, payload);
    console.log({ response });
  } catch (e) {

  }
}

export default function* () {
  yield takeLatest(actions.fetchSingIn, fetchSingIn);
}
