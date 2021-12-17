import React from "react";
import "./product.css";

function product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_description">{title}</p>

        <p className="product_price">
          <small>
            ₹ <strong>{price}</strong>{" "}
          </small>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default product;
