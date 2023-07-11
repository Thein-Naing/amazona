
import React from 'react';
import "../Style/Checkout.css";
import {useStateValue} from "../Context/StateProvider";
import CheckoutProducts from '../components/CheckoutProducts';
// import Subtotal from "../components/Subtotal";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="Checkout">
        <div className="Checkout_left">
            <img className="Checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="Checkout_title">Your Shopping Basket</h2>
                {/* CHECKOUT PRODUCT */}
                {basket.map((item) => (
                    <CheckoutProducts
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className='Checkout_right'>
            {/* <Subtotal /> */}
        </div>
    </div>
  )
}

export default Checkout
