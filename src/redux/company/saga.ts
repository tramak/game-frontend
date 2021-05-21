import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as I from '../auth/interfaces';

function* fetchCompany(action: I.IFetchSingInAction) {
  const { payload } = action;

}

export default function* () {
  // yield takeLatest(actions.fetchCompany, fetchCompany);
  yield put(actions.setCompanies([
    {
      id: 1,
      email: 'test@tactise.com',
      name: 'Tactise',
      url: 'https://tactise.com',
      description: 'ThunkAction is defined but never used'
    },
    {
      id: 2,
      email: 'test@exness.com',
      name: 'Exness',
      url: 'https://exness.com',
      description: 'Action is defined but never used'
    }
  ]));
}
