// import React from "react";
// import "../Style/CheckoutProducts.css";
// import { useStateValue } from "../Context/StateProvider";

// const CheckoutProducts = ({ id, title, image, price, rating }) => {
//   const [{ basket }, dispatch] = useStateValue();

//   return (
//     <div className="CheckoutProducts">
//       <img src={image} alt="" className="CheckoutProducts_img" />
//       <div className="CheckoutProducts_info">
//         <p className="CheckoutProducts_title">{title}</p>
//         <p className="CheckoutProducts_price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//       </div>
//       <div className="CheckoutProducts_rating">
//         {Array(rating).fill()
//         .map((_, i)=>(
//           <p>⭐</p>
//         ))}
//       </div>
//       <button>Remove From Basket</button>
//     </div>
//   );
// };

// export default CheckoutProducts;


import React, { useState } from 'react';
import "../Style/CheckoutProducts.css";
import {useStateValue} from "../Context/StateProvider";

function CheckoutProducts({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div className="checkoutProducts">
        <img className="checkoutProducts_image" src={image} />
        <div className="checkoutProductS_info">
            <p className="checkoutProductS_title">{title}</p>
            <p className="checkoutProductS_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProductS_rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProducts
