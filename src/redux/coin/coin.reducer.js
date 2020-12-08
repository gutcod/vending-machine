import { RESET_COIN, SET_COIN } from "../actionTypes";

const INITIAL_STATE = {
  coin: null,
};

const coinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COIN:
      return {
        ...state,
        coin: action.payload,
      };
    case RESET_COIN:
      return {
        ...state,
        coin: null,
      };
    default:
      return state;
  }
};

export default coinReducer;
