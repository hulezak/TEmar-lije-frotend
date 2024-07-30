import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/signup/SignUp";
import LogIn from "./components/login/Login";
import Home from "./components/home/Home";
import Books from "./pages/books/Books";
import Header from "./components/header/Header";
import "./App.css";

// Principal components
import PrincipalNav from "../src/components/user/principal/Nav/Nav";
import Class from "../src/components/user/principal/class/Class";
import ClassEdit from "../src/components/user/principal/class/Classedit";
import PrincipalStudent from "./components/user/principal/Student/Student";
import PrincipalDashboard from "./../src/components/user/principal/Dashboard/Dashboard";
import PrincipalTeachers from "./../src/components/user/principal/Teacher/Teacher";

// Parents components
import ParentsNav from "./components/user/Parents/Nav/Nav";
import ParentsDashboard from "./components/user/Parents/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/books" element={<Books />} />

        <Route path="/principal" element={<PrincipalNav />}>
          <Route index element={<PrincipalDashboard />} />
          <Route path="dashboard" element={<PrincipalDashboard />} />
          <Route path="teachers" element={<PrincipalTeachers />} />
          <Route path="students" element={<PrincipalStudent />} />
          <Route path="classes">
            <Route index element={<Class />} />
            <Route path="edit_c" element={<ClassEdit />} />
          </Route>
        </Route>

        <Route path="/parent" element={<ParentsNav />}>
          <Route path="dashboard" element={<ParentsDashboard />} />
          <Route path="kids" element={<PrincipalTeachers />} />
        </Route>

        <Route path="/student/dashboard" element={<h1>Student Dashboard</h1>} />
        <Route path="/teacher/dashboard" element={<h1>Teacher Dashboard</h1>} />
      </Routes>
    </div>
  );
}

export default App;
