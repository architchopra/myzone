import React from "react";
import "./checkout.css";
import imga from "./images/banner.png";
import imga2 from "./images/purchase_protection.png";
import Subtotal from "./subtotal";
function checkout() {
  return (
    <div>
      <img src={imga} alt="" className="checkout_ad" />
      <div className="checkout">
        <div className="checkout_left">
          <div className="checkout_title">Shopping Cart</div>
          {/* continue from 2 hrs 40 min */}
        </div>
        <div className="checkout_right">
          <img src={imga2} alt="" />
          <div className="checkout_right_text">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
