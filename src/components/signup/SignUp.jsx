import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student", // Default user type
    schoolName: "",
    location: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      password,
      confirmPassword,
      userType,
      schoolName,
      location,
    } = formData;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username: name,
        email,
        password,
        userType, // Include user type in the request
        schoolName: userType === "principal" ? schoolName : undefined,
        location: userType === "principal" ? location : undefined,
      });
      if (response.status === 201) {
        // Signup successful
        alert("Signup successful!");
        navigate("/login");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="form-title">Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
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
        <div className="form-group">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="userType">
            User Type
          </label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="form-input"
            required
          >
            {" "}
            <option value="teacher">Teacher</option>
            <option value="principal">Principal</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        {formData.userType === "principal" && (
          <>
            <div className="form-group">
              <label className="form-label" htmlFor="schoolName">
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </>
        )}
        <button type="submit" className="submit-btn">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
