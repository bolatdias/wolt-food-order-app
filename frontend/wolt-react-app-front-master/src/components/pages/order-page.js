import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productService from "../../service/product-service";
import OrderInfoCard from "../order-info-card/order-info-card";
import OrderImgRateCard from "../order-img-rate-card/order-img-rate-card";

const OrderPage = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orderMessage, setOrderMessage] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log(productId);
        const response = await productService.getProductDetails(productId);
        setProductData(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchProductData();
  }, [productId]);

  const orderTheProduct = async () => {
    try {
      const response = await productService.orderTheProduct(productId);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      {!isLoading ? (
        productData ? (
          <>
            <div className="container mt-5">
              <div className="order-main-card">
                <div className="order-left-card">
                  <OrderImgRateCard product_id={productId}></OrderImgRateCard>
                </div>
                <div className="order-right-card">
                  <OrderInfoCard
                    name={productData.product.name}
                    price={productData.product.price}
                    cookTime={productData.product.cookTime}
                    rate={productData.rate}
                  />
                  <button
                    className="border-button mt-5"
                    onClick={orderTheProduct}
                  >
                    Order Now
                  </button>
                  {orderMessage && <div className="mt-3">{orderMessage}</div>}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="container mt-5 p-5 d-flex justify-content-center mb-5">
            Product not found.
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default OrderPage;
