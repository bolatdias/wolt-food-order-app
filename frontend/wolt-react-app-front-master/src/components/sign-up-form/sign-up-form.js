// sign-up-form.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import  UserService from "../../service/user-service";
import MessageModal from "../message-modal/message-modal";

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState('');

    const handleShow = (msg) => {
        setMessage(msg);
        setModalShow(true);
    };

    const handleHide = () => {
        setModalShow(false);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        // Check email availability
        const isEmailAvailable = await UserService.checkEmailAvailability(email);
        if (!isEmailAvailable) {
            handleShow('Email is already in use. Please choose another email.');
            return;
        }

        // Check username availability
        const isUsernameAvailable = await UserService.checkUsernameAvailability(username);
        if (!isUsernameAvailable) {
            handleShow('Username is already taken. Please choose another username.');
            return;
        }

        // If both checks pass, proceed with user registration
        const registrationResult = await UserService.registerUser(name, username, email, password);

        if (registrationResult.success) {
            handleShow(registrationResult.message);
        } else {
            handleShow(registrationResult.message);
        }
    };


    return (
        <>
            <form onSubmit={handleSignup} className="login-container">
                <h4>Sign Up</h4>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3">
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
                    Do have an account? <Link to="/login">Login In</Link>
                </p>
                <button type="submit" className="border-button">
                    Sign Up
                </button>
            </form>

            {/* Integration of MessageModal */}
            <MessageModal show={modalShow} onHide={handleHide} message={message} />
        </>
    );
};

export default SignupForm;
