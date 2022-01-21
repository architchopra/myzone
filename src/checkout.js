import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import imga from "./images/banner.png";
import imga2 from "./images/purchase_protection.png";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <img src={imga} alt="" className="checkout_ad" />
      <div className="checkout">
        <div className="checkout_left">
          <div className="checkout_title">Shopping Cart</div>
          {/* resume from 3 hrs 20 min */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
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

export default Checkout;
