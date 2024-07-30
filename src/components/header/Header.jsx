import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import hamburger from "./../../asset/img/hamburger.png";
import Profile from "./Profile";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [ISUserFound, setIsUserFound] = useState("");

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("User")) {
      console.log("User exists in local storage");
      const user = JSON.parse(localStorage.getItem("User"));

      setUserName(user.Name);

      console.log("User:", user);
    } else {
      console.log("User does not exist in local storage");
    }
  }, [localStorage.getItem("User")]);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__left">
          <ul className="navbar__menu">
            <li id="show" className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/books">Books</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <ul className="navbar__right">
          {userName ? (
            <li className="nav-item">
              <li className="navbar__profile">
                <Profile Name={userName[0]} />
              </li>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Log In
              </Link>
            </li>
          )}

          <li className="navbar__hamburger" id="hide">
            <img className="humberger-img" src={hamburger} />
          </li>
        </ul>
      </nav>

      <div className="option_dropdown">
        <ul>
          <li>Acccount</li>
          <li>setting</li>
          <li>Log out</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
