import agent from './agent';
import * as I from '../company/interfaces';
import { AxiosResponse } from 'axios';

export const fetchCompanies = (): Promise<AxiosResponse<I.IFetchCompaniesResponse>> => {
  return agent.GET('/company/all');
};

export const fetchCompany = (id: number | string): Promise<AxiosResponse<I.IFetchCompanyResponse>> => {
  return agent.GET(`/company/${id}`);
};

export const fetchCompanyAdd = (data: I.IAddCompanyFormValues): Promise<AxiosResponse<I.IFetchCompanyAddResponse>> => {
  return agent.POST('/company', data);
};

export const fetchCompanyEdit = (id: number | string, data: I.IAddCompanyFormValues): Promise<AxiosResponse<I.IFetchCompanyEditResponse>> => {
  return agent.PUT(`/company/${id}`, data);
};

export const fetchCompanyDelete = (id: number | string): Promise<AxiosResponse<I.IFetchCompanyDeleteResponse>> => {
  return agent.DELETE(`/company/${id}`);
}
