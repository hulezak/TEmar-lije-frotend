import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Select from "./Select";
import "./classedit.css";
import ClassTaecherList from "./ClassTaecherList";
import axios from "axios";

const Classedit = () => {
  const { state } = useLocation();
  const x = state.some;
  const isNatural = x.social_natural === "Natural";

  const initialState = {
    maths: "",
    biology: "",
    chemistry: "",
    physics: "",
    agriculture: "",
    english: "",
    ict: "",
    history: "",
    geography: "",
    economics: "",
  };

  const [subjects, setSubjects] = useState(initialState);
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/fetch/teachers");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  const onchange = (e) => {
    const { name, value } = e.target;
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [name]: value,
    }));
  };

  // Helper function to generate Select components dynamically
  const generateSelects = (subjectNames) => {
    return subjectNames.map((subject, index) => (
      <Select
        key={index}
        name={subject.toLowerCase()}
        title={`${index + 1}. ${subject} Teacher`}
        value={subjects[subject.toLowerCase()]}
        onchange={onchange}
        options={Data ? Data : []}
      />
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/assignteachers",
        [subjects, x.ClassId]
      );
      console.log("Form submitted successfully:", response.data);
      // Optionally, you can reset the form after successful submission
      setSubjects(initialState);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form submitted:", subjects);
  };

  return (
    <>
      <div className="main">
        <div className="class-edit-container">
          <div className="class-info">
            {" "}
            <h1>{x.Name}</h1>
            <p>Email: {x.Email}</p>
            <p>Grade: {x.Grade}</p>
            <p>Section: {x.Section}</p>
            <p>ClassId: {x.ClassId}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <h3>Select Subjects:</h3>
            {isNatural ? (
              <div className="subject-select-container">
                {generateSelects([
                  "Maths",
                  "Biology",
                  "Chemistry",
                  "Physics",
                  "Agriculture",
                  "English",
                  "ICT",
                ])}
              </div>
            ) : (
              <>
                <h3>Assign 6 Social Courses:</h3>
                <div className="subject-select-container">
                  {generateSelects([
                    "Maths",
                    "History",
                    "Geography",
                    "Economics",
                    "English",
                    "ICT",
                  ])}
                </div>
              </>
            )}
            <button type="submit">Submit the data</button>
          </form>
        </div>
      </div>
      <ClassTaecherList ClassId={x.ClassId} />
    </>
  );
};

export default Classedit;
