import { all, fork } from 'redux-saga/effects';

const registeredSaga: any[] = [];

export default function* rootSaga() {
  const forkedSaga = registeredSaga.map(saga => fork(saga));
  yield all(forkedSaga);
}
