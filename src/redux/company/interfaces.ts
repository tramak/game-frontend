import * as CONST from './constants';
import { IResponse } from '../../intefaces';

export interface ICompany {
  id: number;
  email?: string;
  name: string;
  url?: string;
  description?: string;
  countUsers: number;
}

export type ICompanies = Array<ICompany>;
export interface ICompanyState {
  data?: ICompanies;
  companyActive?: ICompany;
}

// Add Company
export interface ICompanyAddFormValues {
  name: string;
  email: string;
  description?: string;
  url: string;
}

export interface IFetchCompanyAddAction {
  type: typeof CONST.FETCH_COMPANY_ADD;
  payload: ICompanyAddFormValues
}

export type IFetchCompanyAddSuccess = ICompany;
export type IFetchCompanyAddResponse = IResponse<IFetchCompanyAddSuccess>;

// Edit Company
export interface IFetchCompanyEditAction {
  type: typeof CONST.FETCH_COMPANY_EDIT;
  payload: {
    id: number | string;
    data: ICompanyAddFormValues
  }
}

export type IFetchCompanyEditSuccess = ICompany;
export type IFetchCompanyEditResponse = IResponse<IFetchCompanyEditSuccess>;

// Delete Company
export interface IFetchCompanyDeleteAction {
  type: typeof CONST.FETCH_COMPANY_DELETE;
  payload: number | string;
}

export type IFetchCompanyDeleteResponse = IResponse<unknown>;

// FETCH COMPANIES
export interface IFetchCompaniesAction {
  type: typeof CONST.FETCH_COMPANIES;
}
export type IFetchCompaniesResponse = IResponse<ICompanies>;

// FETCH COMPANY
export interface IFetchCompanyAction {
  type: typeof CONST.FETCH_COMPANY
  payload: string;
}
export type IFetchCompanyResponse = IResponse<ICompany>;
