import { combineReducers } from "redux";
import coinReducer from "./coin/coin.reducer";
import productReducer from "./product/product.reducer";
import alertReducer from "./alert/alert.redeucer";

export default combineReducers({
  product: productReducer,
  coin: coinReducer,
  alert: alertReducer,
});
