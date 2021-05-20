export interface ICompany {
  id: number;
  email: string;
  name: string;
  description: string;
}

export type ICompanies = Array<ICompany>;
export interface ICompanyState {
  data?: ICompanies;
}
