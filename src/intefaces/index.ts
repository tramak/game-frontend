export interface IError {
  message: string;
  field?: string;
}

export interface IResponseError {
  code: string;
  errors: Array<IError>
}

export type IResponse<T> = IResponseError | T;
