import { SHOW_ALERT, HIDE_ALERT } from "../actionTypes";

export const showAlert = text => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};
export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};
