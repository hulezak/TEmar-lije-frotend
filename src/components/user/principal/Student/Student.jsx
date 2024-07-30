import React, { useState, useEffect } from "react";
import "./../Teacher/teachers.css";
import axios from "axios";
import "./../Teacher/teachers.css";

const Student = () => {
  const [grades, setGrades] = useState([]);
  const [students, setStudent] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [categoryVisible, setCategoryVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "http://localhost:5000/fetch/studentregistration"
        );

        const studentslist = await axios.get(
          "http://localhost:5000/fetch/students"
        );

        setGrades(response1.data);
        setStudent(studentslist.data);
        console.log(studentslist.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleGradeChange = (e) => {
    const grade = e.target.value;
    setSelectedGrade(grade);
  };

  return (
    <div>
      <div className="teacher-form">
        <div className=".form">
          <h1>Add Student</h1>
          <form method="post" action="http://localhost:5000/addStudents">
            <div className="form-group">
              <label htmlFor="name">Student Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="parent_name">Father Name</label>
              <input type="text" id="name" name="parent_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="Student_phone">
                Student Email or Phone Number
              </label>
              <input type="phone" id="studn" name="Student_phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="parentsphone">Parents Phone Number</label>
              <input type="phone" id="email" name="parent_phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Class</label>
              <select
                id="subject"
                className="select-subject"
                name="Class"
                onChange={handleGradeChange}
                value={selectedGrade}
              >
                {grades.map((grade) => (
                  <option key={grade.id} value={grade.ClassId}>
                    Grade {grade.grade} {grade.section} ---{"    "}
                    {grade.social_natural}
                  </option>
                ))}
              </select>
            </div>

            {/* {categoryVisible && (
              <div className="form-group">
                <label htmlFor="subject">Category</label>
                <select className="" name="social_natural">
                  <option value="natural">Natural</option>
                  <option value="social">Social</option>
                </select>
              </div>
            )} */}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* here is a list of students */}
      <h1>Students added</h1>
      <div className="container11">
        <div className="students-list">
          <table>
            <thead>
              <tr>
                <th> Name</th>
                <th>Email</th>
                <th>Grade</th>
                <th>Section</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.Grade}</td>
                  <td>{student.Section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
