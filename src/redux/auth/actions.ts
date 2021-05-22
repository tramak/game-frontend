import * as I from './interfaces';
import * as CONST from './constants';

export const fetchSingIn = (payload: I.ISingInFormValues): I.IFetchSingInAction => ({
  type: CONST.FETCH_SING_IN,
  payload
});

export const singOut = () => ({
  type: CONST.SING_OUT
})
