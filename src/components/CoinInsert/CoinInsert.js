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
