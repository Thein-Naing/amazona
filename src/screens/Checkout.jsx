import React from 'react';
import '../Style/Checkout.css';
import { useStateValue } from "../Context/StateProvider";



const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue();



  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        className="checkout_ad" />
        <div>
          <h3>Hi, {user?.email}</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
        </div>
      </div>
    </div>
  )
}

export default Checkout
