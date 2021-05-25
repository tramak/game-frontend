import * as I from './interfaces';
import * as CONST from './constants';

export const fetchSingIn = (payload: I.ISingInFormValues, meta: any): I.IFetchSingInAction => ({
  type: CONST.FETCH_SING_IN,
  payload,
  meta
});

export const singOut = () => ({
  type: CONST.SING_OUT
})
