import React from "react";
import CurrencyFormat from "react-currency-format";
import "./prod.css";
import { useStateValue } from "./Stateprovider";
function Prod({ id, image, title, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="checkoutProduct_price">
                <small>
                  <strong>{value}</strong>{" "}
                </small>
              </p>
            </>
          )}
          decimalScale={2}
          thousandSeparator={true}
          value={price}
          displayType={"text"}
          prefix={"₹"}
        />
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Prod;
