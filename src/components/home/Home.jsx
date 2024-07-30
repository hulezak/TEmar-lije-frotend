// Import necessary components and styles
import React from "react";
import { Link } from "react-router-dom";
// Assuming you have a Home.css file for styling
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to Our School</h1>
        <p>Please choose an option below:</p>
        <div className="links-container">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
