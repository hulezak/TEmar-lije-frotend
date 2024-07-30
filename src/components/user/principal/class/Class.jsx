import React, { useState, useEffect } from "react";
import "./class1.css";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";

const Class = () => {
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classesResponse = await fetch(
          "http://localhost:5000/fetch/classes"
        );
        const teachersResponse = await fetch(
          "http://localhost:5000/fetch/teachers"
        );

        if (!classesResponse.ok || !teachersResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const classesData = await classesResponse.json();
        const teachersData = await teachersResponse.json();

        setClasses(classesData);
        setTeachers(teachersData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      <div>
        <h1 className="clas-h1">ADD new class</h1>
        <form
          className="form"
          action="http://localhost:5000/addClasses"
          method="post"
        >
          <label htmlFor="Grade">
            Grade:
            <select name="grade" id="Grade" className="custom-select">
              
              <option value="9">Nine</option>
              <option value="10">Ten</option>
              <option value="11">Eleven</option>
              <option value="12">Twelve</option>
            </select>
          </label>

          <label htmlFor="section">
            Section:
            <input name="section" id="section" className="custom-select" />
          </label>

          <label htmlFor="roomteacher">
            Room teacher:
            <select
              name="roomteacher"
              id="roomteacher"
              className="custom-select"
            >
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.TeacherId}>
                  {teacher.Name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="social_natural">
            please choose class whether social-natural:
            <select
              name="social_natural"
              id="social-natural"
              className="custom-select"
            >
              <option value="Social">Social</option>
              <option value="Natural">Natural</option>
            </select>
          </label>
          <input id="submit" type="submit" value="Submit" />
        </form>
      </div>

      <div className="All-class">
        {classes.map((classItem) => (
          <div key={classItem.id} className="class">
            <label htmlFor="account">
              <AccountCircleRoundedIcon
                style={{
                  fontSize: 60,
                  color: "blue",
                }}
                className="room-teacher-profile"
              />

              {/* Apply custom style to the paragraphs to remove underline */}
              <p
                style={{ textDecoration: "none" }}
              >{`Room teacher: ${classItem.Name}`}</p>
            </label>

            {/* Apply custom style to the paragraphs to remove underline */}
            <p
              style={{ textDecoration: "none" }}
            >{`Grade: ${classItem.Grade}-${classItem.Section}`}</p>
            <p
              style={{ textDecoration: "none" }}
            >{`Category: ${classItem.social_natural}`}</p>
            <Link to="edit_c" state={{ some: classItem }}>
              Go to Classedit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
