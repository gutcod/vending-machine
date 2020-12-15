import { SHOW_ALERT, HIDE_ALERT } from "../actionTypes";

const INITIAL_STATE = {
  alert: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
