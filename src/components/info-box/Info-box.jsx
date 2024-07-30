import React from "react";
import "./info_box.css";
import Profile from "../header/Profile";

const Info_box = ({ kid }) => {
  console.log(kid);
  const roomTeacher = kid.roomTeacher || {}; // Handle case when roomTeacher is undefined

  return (
    <div>
      <div className="info_box">
        <div className="info_box_header">
          <Profile Name={kid.studentName[0]} />{" "}
          <p className="p_name">{kid.studentName}</p>
        </div>

        <ul className="profile_detail_Info">
          <li className="profile_detail_list">Grade : {kid.Grade} </li>
          <li className="profile_detail_list">School: Pharo School</li>
          <li className="profile_detail_list">Section: {kid.Section} </li>
          <li className="profile_detail_list">
            RoomTeacher: {roomTeacher.roomTeacherName || "Not available"}
          </li>
          <li className="profile_detail_list">
            Teacher-Phone: {roomTeacher.roomTeacherPhone || "Not available"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info_box;
