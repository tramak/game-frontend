import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as I from './interfaces';
import { Roles } from '../../intefaces/role';
import * as CONST from './constants';

function* fetchUsers(action: I.IFetchAddUserAction) {
  const { payload } = action;

}

function* fetchAddUser(action: I.IFetchAddUserAction) {
  const { payload } = action;
  console.log({ payload });

}

export default function* () {
  yield takeLatest(CONST.FETCH_ADD_USER, fetchAddUser);

  yield put(actions.setUsers([
    {
      id: 1,
      fio: 'Калаев Виктор Владимирович',
      company: 'Tactise',
      email: 'test@tactise.com',
      group: 'Офис',
      role: Roles.USER,
      invitationAt: new Date().toISOString(),
      status: 0
    },
    {
      id: 2,
      fio: 'Калаев Виктор Владимирович',
      company: 'Tactise',
      email: 'test@tactise.com',
      group: 'Офис',
      role: Roles.ADMIN,
      invitationAt: new Date().toISOString(),
      status: 0
    },
  ]));
}
