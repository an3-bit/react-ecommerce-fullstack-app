import React from 'react';
import './Item.css';

export const Item = (props) => {
  return (
    <div className='item'>
      <div className="item-image-container">
        <img src={props.image} alt={props.name} className="item-image" />
      </div>
      <p className="item-name">{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};
