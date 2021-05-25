import { CallEffect, SagaReturnType } from '@redux-saga/core/effects';
import { call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

export function* request<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): Generator<CallEffect<SagaReturnType<Fn>>> {
  try {
    const response = yield call(fn, ...args);
    // console.log({ response });
    return response;
  } catch (e) {
    // console.log({ e });
    throw e;
  }
}

export function* requestC<Fn extends (...args: any[]) => any>(
  fnC: [Fn, any],
  ...args: Parameters<Fn>
): Generator<CallEffect<SagaReturnType<Fn>>> {
  const fn = fnC[0];
  const action = fnC[1];
  const resolve = action.meta?.promiseActions?.resolve;
  const reject = action.meta?.promiseActions?.reject;

  try {
    const response = yield call(fn, ...args);
    // console.log({ response });
    if (resolve && response) {
      resolve((response as AxiosResponse).data)
    }
    return response;
  } catch (e) {
    // console.log({ e });
    reject(e.response.data);
    throw e;
  }
}
