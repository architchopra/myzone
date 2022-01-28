import React, { useEffect } from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./header";
import imga from "./images/banner.png";
import imga2 from "./images/purchase_protection.png";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./subtotal";
function Checkout() {
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();
  var s = user?.email;
  s = s?.substring(0, s.indexOf("@"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <img src={imga} alt="" className="checkout_ad" />
      <div className="checkout">
        <div className="checkout_left">
          <h3>Hello {s},</h3>
          <div className="checkout_title">Your Shopping Cart</div>

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
