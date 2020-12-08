import React from "react";
import { connect } from "react-redux";
import { PRODUCTS } from "../../data";

const Calc = ({ productId, selectedCoin }) => {
  const product = PRODUCTS.filter(elem => elem.cod === productId)[0];
  if (productId.length < 2) {
    return null;
  }
  const rest = selectedCoin - product.price;
  console.log(rest);
  return (
    <div>
      <span>{product.cod}</span>
      <span>{product.price}</span>
      <span>{product.title}</span>
    </div>
  );
};
const mapStateToProps = state => ({
  selectedCoin: state.coin.coin,
  productId: state.product.product,
});
export default connect(mapStateToProps, null)(Calc);
