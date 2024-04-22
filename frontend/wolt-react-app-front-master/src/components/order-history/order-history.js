import React, { useEffect, useState } from "react";
import ProductService from "../../service/product-service";
import OrderHistoryCard from "../order-history-card/order-history-card";
import './order-history.css';

const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ProductService.getAllOrders();
        setOrderHistory(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error by selecting the order history:', error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoading]); // Use an empty dependency array to run the effect only once on mount

  const handleDeleteButtonClick = async (id) => {
    try {
      const result = await ProductService.deleteOrderById(id);
      if (result) {
        console.log("Order deleted successfully:", result);
        // Update orderHistory state after successful deletion if needed
        setOrderHistory((prevOrderHistory) => prevOrderHistory.filter(order => order.id !== id));
      } else {
        console.log("Failed to delete order");
      }

      setIsLoading(true)
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="orderhistory">
      {orderHistory ? (
        orderHistory.map((order) => (
          <OrderHistoryCard
            key={order.id}
            id={order.id}
            price={order.product.price}
            name={order.product.name}
            cookTime={order.product.cookTime}
            orderTime={order.orderTime}
            handleDelete={() => handleDeleteButtonClick(order.id)}
          />
        ))
      ) : (
        <p>No order history available.</p>
      )}
    </div>
  );
};

export default OrderHistory;
