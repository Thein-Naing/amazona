// import React from "react";
// import "../Style/Product.css";
// // import useStateValue hook
// import { useStateValue } from "../Context/StateProvider";

// const Product = ({id, title, image, price, rating}) => {
// // use useStateValue hook
// const [{basket}, dispatch] = useStateValue();

// const addToBasket = () => {
//   //dispatch the item into data layer
//   dispatch({
//     type: "ADD_TO_BASKET",
//     item: {
//       id: id,
//       title: title,
//       image: image,
//       price: price,
//       rating: rating,
//     },
//   });
// };

//     return(
//         <div className="product">
//             <div className="product_info">
//                 <p>{title}</p>
//                 <p className="product_price">
//                 <small>$</small>
//                 <strong>{price}</strong></p>
//                 <div className='product_rating'>
//                     {Array(rating)
//                         .fill()
//                         .map((_, i) => (
//                             <p>⭐</p>
//                         ))
//                     }
//                 </div>
//             </div>
//             <img src={image} alt="" />
//             <button onClick={addToBasket}>Add to Basket</button>
//         </div>
//     )
// }

// export default Product;


import React, { useState } from 'react';
import "../Style/Product.css";
import {useStateValue} from "../Context/StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        // Dispatch the item in to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <small>$</small>
            <strong>{price}</strong>
            <div className="product_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
        <img src={image} alt="Product Image" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
