import React from "react";
import { EmojiSmile } from "react-bootstrap-icons";
import "./search-item-card.css";

const SearchItemCard = ({ name, rate, cookTime, price }) => {
  return (
    <div>
      <div className="search-card-container mt-5 ">
        <div className="search-card-header">
          <h5 className="card-title">{name}</h5>
        </div>
        <div className="search-card-body">
          <p>Rate: {rate}g</p>
          <p>Cook Time: {cookTime}g</p>
          <p>Price: {price} kcal</p>
        </div>
        <div className="search-card-footer">
          <span>
            {price * 200} ₸ <EmojiSmile size={13} /> {rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchItemCard;
