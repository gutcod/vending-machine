import React, { useState } from "react";
import CoinInsert from "../CoinInsert/CoinInsert";
import Calc from "../Calc/Calc";
import { connect } from "react-redux";
import { resetCoin } from "../../redux/coin/coin.action";
import { setProduct, reduceAmount } from "../../redux/product/product.action";

const BUTTONS_MAP = {
  letters: ["A", "B", "C"],
  numbers: ["1", "2", "3"],
};

const Machine = ({ resetCoin, setProduct, product, reduceAmount }) => {
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
  const confirmSelection = () => {
    reduceAmount(product);
    alert(`Ridicati produsul ${product}`);
  };

  return (
    <div>
      {Object.values(BUTTONS_MAP).map(value => {
        return value.map((btn, id) => {
          return (
            <button
              className='f6 ph4 pv2 mb2 mt4 white bg-green flex-inline w-30 br3'
              onClick={() => onItemClick(btn)}
              disabled={
                disabled.includes(btn) || value.includes(product[0]) || value.includes(product[1])
              }
              key={id}>
              {btn}
            </button>
          );
        });
      })}
      <p className='f5 ttu tracked-mega pv2'>Introduceti codul</p>
      <Calc />
      <CoinInsert />

      <button
        onClick={confirmSelection}
        disabled={!product}
        className='f5 ph4 pv2 mt4 white bg-light-purple br3 w-30 center'>
        confirm
      </button>
      {!product && <span>please select product first</span>}

      <button onClick={reset} className='f5 ph4 pv2 mt4 white bg-light-red br3 w-30 center'>
        reset
      </button>
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
    reduceAmount: id => dispatch(reduceAmount(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Machine);
