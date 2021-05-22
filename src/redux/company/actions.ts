import * as I from './interfaces';
import * as CONST from './constants';
import { FETCH_COMPANY_EDIT } from './constants';
import { IFetchCompanyEditAction } from './interfaces';

export const fetchCompanies = () => ({
  type: CONST.FETCH_COMPANIES
});

export const fetchCompany = (id: number | string) => ({
  type: CONST.FETCH_COMPANY,
  payload: id
});

export const fetchCompanyAdd = (payload: I.IAddCompanyFormValues): I.IFetchCompanyAddAction => ({
  type: CONST.FETCH_COMPANY_ADD,
  payload
});

export const fetchCompanyEdit = (id: number | string, data: I.IAddCompanyFormValues): I.IFetchCompanyEditAction => ({
  type: CONST.FETCH_COMPANY_EDIT,
  payload: {
    id,
    data
  }
});

export const fetchCompanyDelete = (id: number | string) => ({
  type: CONST.FETCH_COMPANY_DELETE,
  payload: id
});
