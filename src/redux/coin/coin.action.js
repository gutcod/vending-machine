import { RESET_COIN, SET_COIN } from "../actionTypes";

export const setCoin = payload => ({
  type: SET_COIN,
  payload: payload,
});
export const resetCoin = () => ({
  type: RESET_COIN,
});
