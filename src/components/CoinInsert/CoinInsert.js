import React from "react";
import { connect } from "react-redux";
import { setCoin } from "../../redux/coin/coin.action";

const COINS_MAP = [1, 5, 10];

const CoinInsert = ({ selectedCoin, selectCoin }) => {
  return (
    <div>
      {COINS_MAP.map((coin, idx) => {
        return (
          <button
            className='f5 ph3 pv2 mt4 white bg-blue br3 w-30'
            key={idx}
            disabled={selectedCoin}
            onClick={() => selectCoin(coin)}>{`${coin} lei`}</button>
        );
      })}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    selectedCoin: state.coin.coin,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    selectCoin: payload => {
      dispatch(setCoin(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinInsert);
