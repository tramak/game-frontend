import * as CONST from './constants';

export const fetchGame = (token: string) => ({
  type: CONST.FETCH_GAME,
  payload: token
});
