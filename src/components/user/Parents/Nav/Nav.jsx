import React from "react";
import { Outlet } from "react-router-dom";

import Alink from "../../../Alink/Alink";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="vertical-nav">
        <ul>
          <Alink linkName="Dashboard" goto="dashboard" />
          <Alink linkName="kids" goto="students" />
          <Alink linkName="Teachers" goto="teachers" />
          <Alink linkName="School" goto="schools" />
          <Alink linkName="scores" goto="Scors" />
          <Alink linkName="Attendance" goto="attendance" />
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Nav;
