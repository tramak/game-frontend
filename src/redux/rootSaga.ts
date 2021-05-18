import { all, fork } from 'redux-saga/effects';
import auth from './auth/saga';

const registeredSaga: Array<() => void> = [ auth ];

export default function* rootSaga() {
  const forkedSaga = registeredSaga.map(saga => fork(saga));
  yield all(forkedSaga);
}
