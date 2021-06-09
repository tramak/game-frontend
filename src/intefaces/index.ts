export interface IFieldErrors {
  [field: string]: string;
}

export interface IError {
  message: string;
  field?: string;
}

export type IErrors = Array<IError>;

export interface IResponseError {
  statusCode: number;
  errors: IErrors
}

export type IResponse<T> = IResponseError | T;

export interface PromiseCallbacks<T, E> {
  resolve: (v: T) => Promise<T> | void,
  reject: (v: E) => Promise<E> | void,
}

export interface PromisifiedMeta<T, E> {
  promiseActions: PromiseCallbacks<T, E>
}

export interface PromisifiedMetaAction<T, E> {
  meta: PromisifiedMeta<T, E>
}

export interface Action<P> {
  type: string,
  payload: P,
  meta?: Record<string, unknown>
}
