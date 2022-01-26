import React from "react";
import CurrencyFormat from "react-currency-format";
import "./product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_description">{title}</p>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="product_price">
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

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
