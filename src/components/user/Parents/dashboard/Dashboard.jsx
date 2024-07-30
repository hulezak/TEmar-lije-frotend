import React, { useState, useEffect } from "react";
import axios from "axios";
import Info_box from "../../../info-box/Info-box";
import "./dashboard.css";

const Dashboard = () => {
  const [kids, setKid] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      console.log("sending fetch requrest");
      try {
        const response = await axios.get("http://localhost:5000/fetch/mykids");
        const kids = response.data;
        setKid(kids);
        console.log("kids", kids);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="parents_dashboard">
      <h1>Welcome, Here are your children</h1>

      <div className="kids_profile_list">
        {kids.map((kid) => (
          <Info_box key={kid.StudentId} kid={kid} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
