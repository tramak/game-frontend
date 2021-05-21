import * as I from './interfaces';
import * as CONST from './constants';

export const fetchAddUser = (payload: I.IAddUserFormValues): I.IFetchAddUserAction => ({
  type: CONST.FETCH_ADD_USER,
  payload
});
