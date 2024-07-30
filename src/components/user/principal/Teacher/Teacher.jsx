import axios from "axios";
import React, { useState, useEffect } from "react";

import "./teachers.css";
const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/fetch/teachers")
      .then((response) => {
        // Handle successful response
        console.log("Teachers data:", response.data);

        setTeachers(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching teachers:", error);
        // Handle error display or other actions
      });
  };

  return (
    <div>

      {/* Add new teacher  */}
      <div className="teacher-form">
        <div className=".form">
          <h1>Add Teacher</h1>
          <form method="post" action="http://localhost:5000/addTeachers">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" className="select-subject" name="subject">
                <option value="Maths">Maths</option>
                <option value="Chemistry">Chemistry</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
                <option value="Economics">Economics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Agriculture">Agriculture</option>
                <option value="English">English</option>
                <option value="physics">Physics</option>
                <option value="ICT">ICT</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="phone" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
         
        </div>

        {/* List of Alll teachers */}
        <div className="container11">
            <h1>Teachers</h1>
            <table>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Subject</th>
                  <th>edit</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index}>
                    <td>{teacher.Name}</td>
                    <td>{teacher.Email}</td>
                    <td>{teacher.Phone}</td>
                    <td>{teacher.Address}</td>
                    <td>{teacher.Subject}</td>
                    <td>edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default Teacher;
