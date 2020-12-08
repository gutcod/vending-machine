import React, { useState } from "react";
import CoinInsert from "../CoinInsert/CoinInsert";
import Calc from "../Calc/Calc";
import { connect } from "react-redux";
import { resetCoin } from "../../redux/coin/coin.action";
import { setProduct } from "../../redux/product/product.action";

const BUTTONS_MAP = {
  letters: ["A", "B", "C"],
  numbers: ["1", "2", "3"],
};

const Machine = ({ resetCoin, setProduct, product }) => {
  const [disabled, setDisabled] = useState([]);

  const onItemClick = value => {
    setDisabled(disabled.concat(value));
    setProduct(product + value);
  };

  const reset = () => {
    setProduct("");
    setDisabled([]);
    resetCoin(null);
  };

  return (
    <div>
      {Object.values(BUTTONS_MAP).map(value => {
        return value.map((btn, idx) => {
          return (
            <button
              onClick={() => onItemClick(btn)}
              disabled={
                disabled.includes(btn) || value.includes(product[0]) || value.includes(product[1])
              }
              key={idx}>
              {btn}
            </button>
          );
        });
      })}
      <Calc />
      <CoinInsert />
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};
const mapStateToProps = state => ({
  product: state.product.product,
});
const mapDispatchToProps = dispatch => {
  return {
    resetCoin: () => {
      dispatch(resetCoin());
    },
    setProduct: payload => {
      dispatch(setProduct(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Machine);
