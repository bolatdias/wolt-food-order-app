class UserService {
  static API_URL = "http://localhost:8080/api";

  BEARER_TOKEN = null;

  // LOGIN
  loginUser = async (usernameOrEmail, password) => {
    try {
      const response = await fetch(`${UserService.API_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernameOrEmail,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.accessToken);
        return { success: true, message: data.accessToken };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || "Login failed. Please try again.",
          serverResponse: errorData, // Include server response for debugging
        };
      }
    } catch (error) {
      console.log("Error during user login:", error);
      return {
        success: false,
        message: "An error occurred during user login. Please try again.",
        serverResponse: null,
      };
    }
  };

  //GETINFOBYTOKEN
  // Method to set the Bearer token
  setBearerToken() {
    const token = localStorage.getItem("token");

    UserService.BEARER_TOKEN = token;
  }

  // Method to make a request to get user details
  getUserDetails = async () => {
    try {
      const response = await fetch(`${UserService.API_URL}/user/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${UserService.BEARER_TOKEN}`, // Add the Bearer token to the headers
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, user: data };
      } else {
        const errorData = await response.json();
        return {
          success: false,
          message: errorData.message || "Failed to get user details.",
          serverResponse: errorData, // Include server response for debugging
        };
      }
    } catch (error) {
      console.error("Error getting user details:", error);
      return {
        success: false,
        message: "An error occurred while getting user details.",
        serverResponse: null,
      };
    }
  };

  //REGISTRATION

  checkEmailAvailability = async (email) => {
    try {
      const response = await fetch(
        `${UserService.API_URL}/user/checkEmailAvailability?email=${email}`
      );
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error("Error checking email availability:", error);
      return false;
    }
  };

  checkUsernameAvailability = async (username) => {
    try {
      const response = await fetch(
        `${UserService.API_URL}/user/checkUsernameAvailability?username=${username}`
      );
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error("Error checking username availability:", error);
      return false;
    }
  };

  registerUser = async (name, username, email, password) => {
    try {
      const response = await fetch(`${UserService.API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        return {
          success: false,
          message: "User registration failed. Please try again.",
        };
      }
    } catch (error) {
      console.error("Error during user registration:", error);
      return {
        success: false,
        message:
          "An error occurred during user registration. Please try again.",
      };
    }
  };

  getInfoByUserName = async (username) => {
    try {
      const response = await fetch(`${UserService.API_URL}/users/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } 
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };
}

const userService = new UserService();

export default userService;
