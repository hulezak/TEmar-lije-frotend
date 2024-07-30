import React from "react";

const AddTeacher = () => {
  return (
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
              <option value="Economics">Chemistry</option>
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
    </div>
  );
};

export default AddTeacher;
