import React from "react";
import "./profile.css";

const Profile = ({ Name }) => {
  return (
    <div>
      <div className="profile-circle">{Name}</div>
    </div>
  );
};

export default Profile;
