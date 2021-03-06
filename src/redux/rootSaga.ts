import { all, fork } from 'redux-saga/effects';
import auth from './auth/saga';
import company from './company/saga';
import game from './game/saga';
import user from './user/saga';

const registeredSaga: Array<() => void> = [ auth, company, game, user ];

export default function* rootSaga() {
  const forkedSaga = registeredSaga.map(saga => fork(saga));
  yield all(forkedSaga);
}
