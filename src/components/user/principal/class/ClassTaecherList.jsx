import React, { useState, useEffect } from "react";
import "./class Teachers.css";
const ClassTeacherList = ({ ClassId }) => {
  const [data, setData] = useState(null);

  console.log(ClassId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example value for the clasid parameter
        const apiUrl = `http://localhost:5000/fetch/classTeachers?clasid=${ClassId}`;

        const results = await fetch(apiUrl);
        const data = await results.json();

        console.log("Data:", data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Teachers in Class</h1>
      <h1>{ClassId}</h1>

      {data ? (
        <div className="class-teachers-list">
          {data.map((teacher) => (
            <div key={teacher.userId} className="teacher-card">
              <h2>{teacher.name}</h2>
              <p className="subject">Subject: {teacher.subject}</p>
              <p className="phone">Phone: {teacher.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ClassTeacherList;
