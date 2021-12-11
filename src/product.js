import React from "react";
import "./product.css";
function product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>
          Harry Potter Box Set: The Complete Collection (Set of 7 Volumes)
          Paperback – Box set, 1 December 2014
        </p>
        <p className="product_price">
          <small>
            ₹ <strong>2,990.00</strong>{" "}
          </small>
          {/* time=1hr 8 min */}
        </p>
      </div>
    </div>
  );
}

export default product;
