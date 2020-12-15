import { SET_PRODUCT } from "../actionTypes";
import { REDUCE_AMOUNT } from "../actionTypes";
export const setProduct = (payload) => ({
  type: SET_PRODUCT,
  payload: payload,
});

export const reduceAmount = (payload) => ({
  type: REDUCE_AMOUNT,
  payload,
});
