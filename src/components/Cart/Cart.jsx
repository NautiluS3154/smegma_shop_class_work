import React from 'react';
import './Cart.css';
import Button from '../Button/Button';


const Cart = (props) => {
    const {image, title, desc,price} = props
  return (
    <div className= 'cart'>
        <img src={image} alt="image_catalog" />
        <div className="block_title">
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
            <p className="price">{price}$</p>
            <Button titleBtn ="buy"/>
        </div>
        
    </div>
  );
}

export default Cart;
