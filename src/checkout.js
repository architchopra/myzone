import React from "react";
import "./checkout.css";
import imga from "./images/banner.png";
import imga2 from "./images/purchase_protection.png";
function checkout() {
  return (
    <div>
      <img src={imga} alt="" className="checkout_ad" />
      <div className="checkout">
        <div className="checkout_left">
          <div className="checkout_title">Shopping Cart</div>
        </div>
        <div className="checkout_right">
          <img src={imga2} alt="" />
          <div className="checkout_right_text">
            Subtotal
            {/* continue from 1 hr 49 mins */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
