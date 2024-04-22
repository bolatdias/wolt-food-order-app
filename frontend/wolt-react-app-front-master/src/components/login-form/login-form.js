import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login-form.css";
import userService from "../../service/user-service";
import MessageModal from "../message-modal/message-modal";

import { Envelope } from "react-bootstrap-icons";
import userAuthService from "../../service/user-auth";

const LoginForm = () => {
  const [usernameOrEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleShow = (msg) => {
    setMessage(msg);
    setModalShow(true);
  };

  const handleHide = () => {
    setModalShow(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await userService.loginUser(usernameOrEmail, password);

      if (data.success) {
        // Assuming data.accessToken and data.tokenType are present in the response
        userAuthService.setUser({
          usernameOrEmail: usernameOrEmail,
          accessToken: data.accessToken,
          tokenType: data.tokenType,
        });

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            usernameOrEmail: usernameOrEmail,
            accessToken: data.accessToken,
            tokenType: data.tokenType,
          })
        );
        window.location.href = "/";
      } else {
        handleShow(data.message);
        console.error("Server Response:", data.serverResponse); // Log server response for debugging
      }
    } catch (error) {
      handleShow("An error occurred during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="login-container">
        <h4>Login</h4>
        <div className="mb-3 input-group">
          <input
            type="usernameOrEmail"
            className="form-control"
            value={usernameOrEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3 input-group">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <p className="signup-link">
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit" className="border-button">
          Login
        </button>
      </form>

      <MessageModal show={modalShow} onHide={handleHide} message={message} />
    </>
  );
};

export default LoginForm;
