import React from "react";
import { connect } from "react-redux";
import { PRODUCTS } from "../../data";

const Calc = ({ productId, selectedCoin }) => {
  const product = PRODUCTS.filter(elem => elem.cod === productId)[0];
  if (productId.length < 2) {
    return null;
  }
  const rest = selectedCoin - product.price;
  return (
    <div className='center bg-washed-blue pa1 flex flex-column w-90  tr'>
      {rest < 0 ? (
        <div className='f6 ttu tracked-mega mt0'>
          <p>produsul:{product.title}</p>
          <p>codul:{product.cod}</p>
          <p>pret:{product.price}</p>
          <p>Introduceti minim {Math.abs(rest)} lei</p>
        </div>
      ) : (
        <div className='f6 ttu tracked-mega mt0'>
          <p>produsul:{product.title}</p>
          <p>codul:{product.cod}</p>
          <p>pret:{product.price}</p>
          <p>Restul:{rest} lei</p>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  selectedCoin: state.coin.coin,
  productId: state.product.product,
});
export default connect(mapStateToProps, null)(Calc);
