import React from 'react';
import './CheckoutItem.css';
import { useStateValue } from './StateProvider.js';

function CheckoutItem({ id, image, title, price, rating, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'Remove_from_Cart',
            id: id,
        })
    }
    return (
        <div className="checkoutItem">
            <img className="checkoutItem__image" src={image} />

            <div className="checkoutItem__info">
                <p className="checkoutItem__title">{title}</p>
                <p className="checkoutItem__price">
                    <small><strong>Rs. </strong></small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem__rating">
                    {Array(rating).fill().map((_, i) =>
                    (
                        <p>⭐</p>
                    ))
                    }
                </div>
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutItem;
