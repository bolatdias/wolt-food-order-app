import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import apiService from "../../service/api-service";
import SearchItemCard from "../seach-item-card/search-item-card";

import "./search-item-component.css";
import productService from "../../service/product-service";

const SearchItemsComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Search Parameters:", searchParams.toString());
        const data = await productService.searchProductByURL({
          url: `search?${searchParams.toString()}`,
        });
        setSearchData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return isLoading ? (
    <div className="container mt-5 p-5 d-flex justify-content-center mb-5">
      <PropagateLoader color="#49ceff" />
    </div>
  ) : (
    <div>
      <div className="search-container">
        {searchData && searchData.map((searchItem) => (
          <>
            <div className="product-card" key={searchItem.product.id}>
              <SearchItemCard
                name={searchItem.product.name}
                price={searchItem.product.price}
                rate={searchItem.rate}
                cookTime={searchItem.product.cookTime}
                // Добавьте остальные свойства, если они есть в данных
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SearchItemsComponent;
