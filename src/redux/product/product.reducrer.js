import { SET_PRODUCT } from "../actionTypes";

const INITIAL_STATE = {
  product: "",
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
