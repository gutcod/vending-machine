import React from "react";

const Card = ({ title, imageUrl, price, cod }) => {
  return (
    <div className='card'>
      <img src={imageUrl} className='card-img-top' alt={imageUrl} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>Price:{price} RON</p>
        <p className='card-text'>Cod:{cod}</p>
      </div>
    </div>
  );
};

export default Card;
