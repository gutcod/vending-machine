import { combineReducers } from "redux";
import coinReducer from "./coin/coin.reducer";
import productReducer from "./product/product.reducrer";

export default combineReducers({
  product: productReducer,
  coin: coinReducer,
});
