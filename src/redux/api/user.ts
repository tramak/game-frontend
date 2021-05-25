import * as I from '../user/interfaces';
import { AxiosResponse } from 'axios';
import agent from './agent';
import { IFetchUserDeleteResponse, IFetchUsersXslPayload } from '../user/interfaces';

export const fetchUsers = (): Promise<AxiosResponse<I.IFetchUsersResponse>> => {
  return agent.GET('/user/all');
};

export const fetchUser = (id: number | string): Promise<AxiosResponse<I.IFetchUserResponse>> => {
  return agent.GET(`/user/${id}`);
};

export const fetchUserAdd = (data: I.IUserAddFormValues): Promise<AxiosResponse<I.IFetchUserAddResponse>> => {
  return agent.POST('/user', data);
};

export const fetchUserEdit = (id: number | string, data: I.IUserAddFormValues): Promise<AxiosResponse<I.IFetchUserEditResponse>> => {
  return agent.PUT(`/user/${id}`, data);
};

export const fetchUserDelete = (id: number | string): Promise<AxiosResponse<I.IFetchUserDeleteResponse>> => {
  return agent.DELETE(`/user/${id}`);
};

export const fetchUsersXsl = (payload: I.IFetchUsersXslPayload): Promise<AxiosResponse<I.IFetchUsersXslResponse>> => {
  const { file } = payload;
  const formData = new FormData();
  formData.append('file', file);

  return agent.POST('/user/import/xsl', formData, {
    'Content-Type': 'multipart/form-data'
  })
}
