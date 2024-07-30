import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrincipalDashboard from "../components/user/principal/Dashboard/Dashboard";
import PrincipalTeachers from "../components/user/principal/Teacher/Teacher";
import TeacherDashboard from "./../components/dashboard/teacher";
import StudentDashboard from "./../components/dashboard/student";
import ParentDashboard from "./../components/dashboard/parets";
import Unauthorized from "./Una";

const User = () => {
  const [userType, setUserType] = useState(localStorage.getItem("userType"));

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem("userType");
    setUserType(userTypeFromStorage);
  }, []);

  if (userType == "student") {
    return (
      <Routes>
        <Route path="user/student/*" element={<StudentDashboard />} />
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    );
  } else if (userType == "teacher") {
    return (
      <Routes>
        <Route path="/teacher/*" element={<TeacherDashboard />} />
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    );
  } else if (userType == "principal") {
    return (
      <Routes>
        <Route path="/principal/*" element={<PrincipalDashboard />} />
        <Route path="/principal/teachers" element={<PrincipalTeachers />} />

        <Route path="*" element={<Unauthorized />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/parent/*" element={<ParentDashboard />} />
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    );
  }
};

export default User;
