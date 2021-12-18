import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./Stateprovider";
import "./subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" id="gift" />
              <label for="gift">This order contains a gift</label>
            </small>
          </>
        )}
        decimalScale={2}
        thousandSeparator={true}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"₹"}
      />
      <button>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
