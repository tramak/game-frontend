import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';

function* setAccountData(action: any) {
  console.log({ action });
}

export default function* () {
  yield takeEvery(actions.setAccountData, setAccountData);
}
