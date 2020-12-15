import React from "react";
import { connect } from "react-redux";
const Calc = ({ productId, selectedCoin, products }) => {
  const product = [...products].filter(elem => elem.cod === productId)[0];
  if (productId.length < 2) {
    return null;
  }
  if (!product) {
    return <p>{productId} is not a valid cod, try again.</p>;
  }
  const rest = selectedCoin - product.price;

  return (
    <div className='center bg-washed-blue pa1 mb2 flex flex-column w-90  tr'>
      {rest < 0 ? (
        <div className='f6 ttu tracked-mega mt0'>
          <p>produsul:{product.title}</p>
          <p>codul:{product.cod}</p>
          <p>pret:{product.price} lei</p>
          <p>Introduceti minim {Math.abs(rest)} lei</p>
        </div>
      ) : (
        <div className='f6 ttu tracked-mega mt0'>
          <p>produsul:{product.title}</p>
          <p>codul:{product.cod}</p>
          <p>pret:{product.price} lei</p>
          <p>Restul:{rest} lei</p>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  selectedCoin: state.coin.coin,
  productId: state.product.product,
  products: state.product.products,
});

export default connect(mapStateToProps)(Calc);
