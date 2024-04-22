class ProductService {
  static WOLT_URL = "http://localhost:8080/api";
  // Method to set the Bearer token
  setBearerToken() {
    const token = localStorage.getItem("token");

    ProductService.BEARER_TOKEN = token;
  }
  getAllOrders = async () => {
    try {
      this.setBearerToken();
      const response = await fetch(`${ProductService.WOLT_URL}/users/order/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ProductService.BEARER_TOKEN}`, // Add the Bearer token to the headers
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  deleteOrderById = async (id) => {
    try {
      const response = await fetch(
        `${ProductService.WOLT_URL}/order/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ProductService.BEARER_TOKEN}`, // Add the Bearer token to the headers
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  searchProductByName = async ({ query }) => {
    try {
      const response = await fetch(
        `${ProductService.WOLT_URL}/product/search?name=${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  searchProductByURL = async ({ url }) => {
    try {
      const response = await fetch(
        `${ProductService.WOLT_URL}/product/${url}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  getProductDetails = async (productId) => {
    try {
      const response = await fetch(`${ProductService.WOLT_URL}/product/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  orderTheProduct = async (productId) => {
    try {
      this.setBearerToken()
      const response = await fetch(
        `${ProductService.WOLT_URL}/product/order/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ProductService.BEARER_TOKEN}`, // Add the Bearer token to the headers
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        // Вывести сообщение о успешном заказе
        alert("Ваш заказ принят!");
        
        // Перенаправить пользователя на страницу профиля (замените "/profile" на актуальный маршрут)
        window.location.href = "/profile";
        
        return data;
      } else {
        // Вывести сообщение об ошибке
        alert("Ошибка при оформлении заказа. Попробуйте еще раз.");
        
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  rateTheProduct = async ({ id, rate }) => {
    try {
      this.setBearerToken();
      const response = await fetch(
        `${ProductService.WOLT_URL}/product/rate/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ProductService.BEARER_TOKEN}`, // Add the Bearer token to the headers
          },
          body: JSON.stringify({
            rate: rate, // Set the rate value as needed
          }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  


}

const productService = new ProductService();

export default productService;
