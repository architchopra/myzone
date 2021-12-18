import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
function subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 item):
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
        value={499625.0}
        displayType={"text"}
        prefix={"₹"}
      />
      <button>Proceed to Buy</button>
    </div>
  );
}

export default subtotal;
