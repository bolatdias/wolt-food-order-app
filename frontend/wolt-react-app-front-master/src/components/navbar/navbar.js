// Import the necessary components and styles
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/food-logo.png";
import userAuthService from "../../service/user-auth";
import "./navbar.css";
import userService from "../../service/user-service";
import { BoxArrowRight, Search } from "react-bootstrap-icons";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [CheckUser, setCheckUser] = useState(false);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleLoginOut = () => {
    setUserLoggedIn(false);
    userAuthService.logout();
  };

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (user) {
          // Set the Bearer token for subsequent requests
          userService.setBearerToken();

          // Fetch user details using the Bearer token
          const userDetails = await userService.getUserDetails();

          if (userDetails.success) {
            userAuthService.setUser({
              name: userDetails.user.name,
              usernameOrEmail: userDetails.user.username,
              // Add other necessary user information here
            });
            setUser(userDetails.user);
            setUserLoggedIn(true);
          }
        }

        setCheckUser(true);
      } catch (error) {
        console.error("Error handling login:", error);
      }
    };

    handleLogin();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-container shadow-sm">
      <div className="container-fluid d-flex justify-content-center" id="start">
        <button
          className={`navbar-toggler ${isNavCollapsed ? "border-0" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            isNavCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav nav-center-container">
            <li className="nav-item">
              <Link
                to="/"
                className="navbar-brand logo d-sm-none d-md-none d-lg-block"
              >
                <img src={logo} alt="Food Logo" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/foods" className="nav-link">
                Foods
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/search" className="nav-link">
                <Search></Search>
              </Link>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav login-nav-container">
          {userLoggedIn && (
            <>
              <li>
                <Link
                  className="nav-link"
                  to={`/profile/${user.username}`}
                >
                  Hi, {user.name}
                </Link>
              </li>
              <li className="nav-link">
                <BoxArrowRight size={24} onClick={handleLoginOut} />
              </li>
            </>
          )}

          {CheckUser && !userLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
