import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        alert("Login successful!");
        setFormData({
          email: "",
          password: "",
        });
        setError("");

        // Store userType in localStorage
        // console.log(response)
        const x = response.data.User;
        const userJSON = JSON.stringify(x);

        localStorage.setItem("User", userJSON);
        // console.log(x);
        navigate(`/${x.UserType}/dashboard`);
        //
      } else {
        setError("Login failed. User not found or invalid credentials.");
        console.error("Login error:", response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setError(`Login failed: ${error.response.data}`);
        console.error("Login error:", error.response.data);
      } else if (error.request) {
        setError("Login failed: Network error");
        console.error("Login error:", error.request);
      } else {
        setError("Login failed. Please try again.");
        console.error("Login error:", error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
