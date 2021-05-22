import { put, takeLatest, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as api from '../api';
import * as actions from '../actions';
import * as I from './interfaces';
import * as CONST from './constants';
import { history } from '../history';

function* fetchCompanyAdd(action: I.IFetchCompanyAddAction) {
  const { payload } = action;

  try {
    const response: AxiosResponse<I.IFetchCompanyAddResponse> = yield call(api.fetchCompanyAdd, payload);
    history.push('/companies');
  } catch(e) {}
}

function* fetchCompanyEdit(action: I.IFetchCompanyEditAction) {
  const { payload } = action;
  const { id, data } = payload;

  try {
    const response: AxiosResponse<I.IFetchCompanyAddResponse> = yield call(api.fetchCompanyEdit, id, data);
    history.push('/companies');
  } catch(e) {}
}

function* fetchCompanyDelete(action: I.IFetchCompanyDeleteAction) {
  const { payload: id } = action;

  try {
    const response: AxiosResponse<I.IFetchCompanyDeleteResponse> = yield call(api.fetchCompanyDelete, id);
    yield put(actions.fetchCompanies());
  } catch(e) {}
}

function* fetchCompanies() {
  try {
    const response: AxiosResponse<I.IFetchCompaniesResponse> = yield call(api.fetchCompanies);
    const companies = response.data as I.ICompanies;
    yield put(actions.setCompanies(companies));
  } catch(e) {}
}

function* fetchCompany(action: I.IFetchCompanyAction) {
  const { payload } = action;

  try {
    const response: AxiosResponse<I.IFetchCompanyResponse> = yield call(api.fetchCompany, payload);
    const company = response.data as I.ICompany;
    yield put(actions.setCompany(company));
  } catch (e) {}
}

export default function* () {
  yield takeLatest(CONST.FETCH_COMPANY_ADD, fetchCompanyAdd)
  yield takeLatest(CONST.FETCH_COMPANY_EDIT, fetchCompanyEdit)
  yield takeLatest(CONST.FETCH_COMPANY_DELETE, fetchCompanyDelete)
  yield takeLatest(CONST.FETCH_COMPANIES, fetchCompanies)
  yield takeLatest(CONST.FETCH_COMPANY, fetchCompany)
}
