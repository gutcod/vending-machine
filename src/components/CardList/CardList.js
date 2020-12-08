import React from "react";
import { PRODUCTS } from "../../data";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className='container'>
      <div className='row'>
        {PRODUCTS.map(({ id, ...other }) => {
          return (
            <div className='col-sm-3 mb-4'>
              <Card key={id} {...other} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
