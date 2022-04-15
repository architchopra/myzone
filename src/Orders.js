import React, { useEffect } from "react";
import "./Orders.css";

import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import Prod from "./Prod";
import Header from "./header";

function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const navigation = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const [{ basket, user }, dispatch] = useStateValue();

  var s = user?.email;
  s = s?.substring(0, s.indexOf("@"));
  return (
    <div className="order">
      <h1 className="heading_one">
        Congratulations your payment was successful!!!!!!!!!!!
      </h1>
      <h2 className="heading_two">Your Orders {s},</h2>

      <p className="order__id">
        <small>{basket.id}</small>
      </p>
      {basket?.map((item) => (
        <Prod
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="btnb" type="submit" onClick={navigation}>
        Back To Home
      </button>
    </div>
  );
}

export default Order;
