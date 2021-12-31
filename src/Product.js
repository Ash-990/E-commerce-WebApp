import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    
    const addToCart = () => {
        console.log("this is the Cart : ", cart);
        dispatch({
            type: 'Add_To_Cart',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        // console.log("Cart : ", cart);
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>
                        <strong>{price}</strong>
                    </small>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) =>
                    (
                        <p>⭐</p>
                    ))
                    }
                </div>
            </div>
            <img src={image} />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;
