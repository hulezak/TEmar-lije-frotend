import axios from "axios";
import "./principal.css"; // Import CSS file for styling
import Teacher from "../Teacher/Teacher";
import Student_logo from "./../../../../asset/img/student-logo.png";

function Principal() {
  return (
    <div className="apartfromNav">
      <div className="principal-container">
        <main className="main-content">
          <h1>Overall view of your School</h1>
          <section className="home-icons">
            <div className="student dashboard-icons">
              <div className="img-icon">
                <img src={Student_logo} />
              </div>

              <h4>0 student</h4>
            </div>

            <div className="Teacher dashboard-icons">
              <div className="img-icon">
                <img src={Student_logo} />
              </div>
              <h4>0 Teacher</h4>
            </div>

            <div className="parents dashboard-icons">
              <div className="img-icon">
                <img src={Student_logo} />
              </div>
              <h4>0 Teacher</h4>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Principal;
