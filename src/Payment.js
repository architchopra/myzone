import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./header";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./Stateprovider";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    {
      /* resume from 6 hrs 14 min */
    }
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <Header />
      <div className="payment_conatiner">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length}items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="space"></div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>59,Gagan Colony near Celebration Mall</p>
            <p>Batala Road Amritsar</p>
            <p>Punjab,India pin-143001</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>

          <div className="payment_items">
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
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_subtotal">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total ({basket.length} item):
                        <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  thousandSeparator={true}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  prefix={"₹"}
                />
                <button disabled={processing || succeeded || disabled}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
