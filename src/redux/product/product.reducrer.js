import { SET_PRODUCT, REDUCE_AMOUNT } from "../actionTypes";
import { PRODUCTS } from "../../data";
const INITIAL_STATE = {
  product: "",
  products: PRODUCTS,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case REDUCE_AMOUNT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.cod === action.payload) {
            product.amount = product.amount - 1;
            return product;
          }
          return product;
        }),
      };
    default:
      return state;
  }
};

export default productReducer;
