import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./header";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./Stateprovider";
import { db } from "./firebase";
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [res, setRes] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
      setRes(response.data);
    };
    getClientSecret();
  }, [basket]);

  console.log("client secrety", clientSecret, res);
  console.log("p", user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        // const ref = db.collection("users").doc(user?.uid);
        // ref.doc(paymentIntent.id).set({
        //   basket: basket,
        //   amount: paymentIntent.amount,
        //   created: paymentIntent.created,
        // });

        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        const querydata = querySnapshot.docs.map((user) => ({
          ...user.data(),
          id: user?.uid,
        }));
        console.log(querydata);
        querydata.map(async (paymentIntent) => {
          await setDoc(doc(db, `users/${paymentIntent.id}/orders`, user?.uid), {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        });

        // const newuserRef = doc(
        //   collection(db, "users", user?.uid, "orders", paymentIntent.id)
        // );

        // const data = {
        //   basket: basket,
        //   amount: paymentIntent.amount,
        //   created: paymentIntent.created,
        // };

        // await setDoc(newuserRef, data);

        // const res = await db.collection("users").doc(user?.uid);
        // const res2 = res.collection("orders").doc(paymentIntent.id);

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders");
        //   dispatch({
        //     type: "EMPTY_BASKET",
        //   });
      });
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
          Checkout(
          <Link to="/checkout" className="number">
            {basket?.length}items
          </Link>
          )
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="space"></div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>Jaypee institute of information technology</p>
            <p>Noida sec-62</p>
            <p>Uttar Pradesh,India pin-143001</p>
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
            <form onSubmit={handleSubmit} className="frm">
              <CardElement onChange={handleChange} />
              <div className="payment_subtotal">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className="hed">
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
                <button
                  className="btn"
                  disabled={processing || succeeded || disabled}
                >
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
