import * as api from '../api';
import * as actions from '../actions';
import * as I from './interfaces';
import * as CONST from './constants';
import { call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

function* fetchGame(action: I.IFetchGameAction) {
  const { payload: token } = action;

  try {
    const response: AxiosResponse<I.IFetchGameResponse> = yield call(api.fetchGame, token);
    const { body } = response.data as I.IFetchGameSuccess;
    const data = JSON.parse(body);

    if (data.Error) {
      alert('Что-то пошло не так, запустить игру не получилось')
    }

    if (data.Message) {
      window.location.href = data.Message;
    }
  } catch (e) {}
}

export default function* () {
  yield takeLatest(CONST.FETCH_GAME, fetchGame);
}
