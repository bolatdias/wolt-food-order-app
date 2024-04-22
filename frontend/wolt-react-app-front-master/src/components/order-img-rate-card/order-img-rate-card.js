import React, { useState, useEffect } from "react";
import "./order-img-rate.css";
import productService from "../../service/product-service";

const OrderImgRateCard = ({ height, product_id }) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);

  useEffect(() => {
    // Проверяем в localStorage, был ли продукт оценен
    const isRated = localStorage.getItem(`product_${product_id}_rated`);
    if (isRated) {
      setRated(true);
    }
  }, [product_id]);

  const handleRateButton = async () => {
    try {
      const data = await productService.rateTheProduct({ rate: rating, id: product_id });
      alert("Product rated successfully:", data);
      setRated(true);

      // Сохраняем информацию об оценке в localStorage
      localStorage.setItem(`product_${product_id}_rated`, "true");
    } catch (error) {
      console.error("Error rating the product:", error);
      alert("Error rating the product. Please try again.");
    }
  };

  return (
    <div>
      <div className="img-rate-container" style={{ height: height }}>
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + "/food-images/soup2.jpeg"}
            alt="product-img"
          />
        </div>
        <div className="rate-container">
          <div className="col-4">
            <input
              type="number"
              className="form-control mr-2"
              placeholder="Enter your rating"
              min="0"
              max="10"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              disabled={rated}
            ></input>
          </div>
          <div>
            <button className="border-button" onClick={handleRateButton} disabled={rated}>
              Rate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderImgRateCard;
