import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import { useStateValue } from './StateProvider.js';
import CheckoutItem from './CheckoutItem.js';


function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                <div>
                    <h3> Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Cart</h2>
                    {cart.map(item => (
                        <CheckoutItem
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                {/* <h2>The Subtotal here</h2> */}
            </div>
        </div>
    );
}

export default Checkout;
