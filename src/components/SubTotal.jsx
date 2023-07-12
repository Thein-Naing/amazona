import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/StateProvider";
import "../Style/SubTotal.css";
import { getBasketTotal } from "../Context/reducer";

const SubTotal = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const total = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_left">
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
    </div>
  );
};

export default SubTotal;
