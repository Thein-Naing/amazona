import React from 'react';
import "../Style/SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../Context/StateProvider";
import {getBasketTotal} from "../Context/reducer";
import {useNavigate} from "react-router-dom";
// import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
// import { alert } from '@mui/material';
// import "react-toastify/dist/ReactToastify.css";
// import {  toast} from "react-toastify";



// toast.configure();

function SubTotal() {
    const Navigate = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();
    const total = getBasketTotal(basket);

    async function handleToken(token){
        const response = await axios.post("http://localhost:8080/checkout", {
            token,
            total
        })
        const {status} = response.data;
        if(status === "success"){
            alert ("Success! Product Purchased", {
                type: "success"
            })
        }else{
            alert ("Error! Something went wrong", {
                type: "error"
            })
        }
    }

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal_left'>
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
      <button>Checkout</button>
      {/* <StripeCheckout
      stripeKey="pk_test_51NESrqHpTTELhGYNLcO9J2PzPFHJE2mJLBVUuqv5NBF12heMthn2nQDE4Vk6eHJ1jfCepUisyvtNVpGeftS4qosh00zBENIGIi"
      token={handleToken}
      amount={total}


      /> */}
    </div>
  );
};

export default SubTotal;
