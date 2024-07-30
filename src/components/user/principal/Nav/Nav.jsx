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
          <Alink linkName="Students" goto="students" />
          <Alink linkName="Teachers" goto="teachers" />
          <Alink linkName="Classes" goto="classes" />
          <Alink linkName="Attendance" goto="attendance" />
          <Alink linkName="Grades" goto="grades" />
          <Alink linkName="Events" goto="Events" />
          <Alink linkName="Reports" goto="reports" />
        </ul>
      </nav>

      <Outlet/>
    </div>
  );
};

export default Nav;
