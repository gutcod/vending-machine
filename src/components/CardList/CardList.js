import React from "react";
import { PRODUCTS } from "../../data";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div>
      {PRODUCTS.map(({ id, ...other }) => {
        return <Card key={id} {...other} />;
      })}
    </div>
  );
};

export default CardList;
