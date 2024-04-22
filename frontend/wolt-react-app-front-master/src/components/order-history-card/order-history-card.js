import React from "react";
import './order-history-card.css'
import { XLg } from "react-bootstrap-icons";

const OrderHistoryCard = ({id, price, name, cookTime, orderTime, handleDelete}) => {
    return(
        <>
        <div className="orderhistorycard">
            <span>ID: {id}</span>
            <span>Name: {name}</span>
            <span>Cook Time: {cookTime} min </span>
            <span>Order Time: {orderTime}</span>
            <span>Price: {price} $</span>
            <button className="deleteorderbutton" onClick={handleDelete}><XLg size={20}></XLg>
            </button>
        </div>
        </>

    );
}
export default OrderHistoryCard;