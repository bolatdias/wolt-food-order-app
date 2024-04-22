import React from "react";
import "./order-info-card.css";

const OrderInfoCard = ({ name, cookTime, price, rate, height }) => {
  return (
    <div>
      <div className="order-container" style={{ height: height }}>
        <div className="order-title-container">
          <h5 className="order-title">{name}</h5>
          <hr/>
        </div>
        <div className="order-info-container">
          <span>
            <p className="gray-text">Cook Time:</p>
            {cookTime} min
            <br></br>
            <br></br>
            <p className="gray-text">Price:</p>
            {price} $ 
            <br></br>
            <br></br>
            <p className="gray-text">Rate:</p>
            {rate}
            <br></br>
            <br></br>
            <p className="gray-text">Address:</p>
            IITU
          </span>
        </div>
      </div>
    </div>
  );
};

// {
//     "product": {
//         "id": 1,
//         "price": 15000,
//         "name": "Salade",
//         "cookTime": 30
//     },
//     "rate": 0
// }
export default OrderInfoCard;