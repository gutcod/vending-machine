import React from "react";

const Card = ({ title, imageUrl, price, cod, amount }) => {
  return (
    <div className="fl w-third pa2 bg-white ba br3">
      <img
        src={imageUrl}
        alt={imageUrl}
        className="db w-60 br2 br-top center"
      />
      <div className="f6 ttu tracked-mega mt0">
        <p className="b">{title}</p>
        <p>cod:{cod}</p>
        <p>pret:{price} lei</p>
        <p>Amount: {amount}</p>
      </div>
    </div>
  );
};

export default Card;
