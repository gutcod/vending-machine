import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

const CardList = ({ products }) => {
  return (
    <div>
      {products.map((data, idx) => {
        return <Card key={idx} {...data} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({ products: state.product.products });

export default connect(mapStateToProps, null)(CardList);
