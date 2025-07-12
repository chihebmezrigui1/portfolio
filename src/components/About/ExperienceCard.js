import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div style={{ textAlign: "justify" }}>
            <h3 style={{ color: "rgb(155 126 172)", marginBottom: "20px" }}>
              Professional Experience
            </h3>
            
            {/* Experience 1 */}
            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "white", marginBottom: "10px" }}>
                <span className="purple">09/2023 – Present</span> : Fullstack Developer - Alternance
              </h4>
              <h5 style={{ color: "rgb(155 126 172)", marginBottom: "15px" }}>
                RDIUP, Paris
              </h5>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Technical Stack:
              </p>
              <p style={{ marginBottom: "15px", fontSize: "0.9em" }}>
                React.js (TypeScript, JavaScript), Redux, Python (Django), WebSocket, PostgreSQL, MongoDB, REST API, Git/GitLab, CI/CD, Mapbox API, Postman, SCSS, Tailwind, Ant Design, Docker
              </p>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Key Achievements:
              </p>
              <ul style={{ marginBottom: "0" }}>
                <li className="about-activity">
                  <ImPointRight /> Development of fullstack web applications for European projects
                </li>
                <li className="about-activity">
                  <ImPointRight /> Design of secure and performant REST APIs
                </li>
                <li className="about-activity">
                  <ImPointRight /> Real-time data processing and visualization through modern interfaces
                </li>
                <li className="about-activity">
                  <ImPointRight /> Containerization with Docker & CI/CD deployment automation
                </li>
                <li className="about-activity">
                  <ImPointRight /> Participation in technical meetings with European partners (🇪🇺)
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "white", marginBottom: "10px" }}>
                <span className="purple">04/2023 – 07/2023</span> : Fullstack Developer - Final Project Internship
              </h4>
              <h5 style={{ color: "rgb(155 126 172)", marginBottom: "15px" }}>
                RDIUP, Tunisia
              </h5>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Technical Stack:
              </p>
              <p style={{ marginBottom: "15px", fontSize: "0.9em" }}>
                React Native, Python (Django), Docker, MongoDB, GitLab, Swagger
              </p>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Key Achievements:
              </p>
              <ul style={{ marginBottom: "0" }}>
                <li className="about-activity">
                  <ImPointRight /> Development of cross-platform mobile application (station data management)
                </li>
                <li className="about-activity">
                  <ImPointRight /> Integration of Mapbox for geolocation and mapping features
                </li>
                <li className="about-activity">
                  <ImPointRight /> Design and documentation of REST APIs (Swagger + Django)
                </li>
                <li className="about-activity">
                  <ImPointRight /> Deployment via Docker & GitLab CI/CD
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "white", marginBottom: "10px" }}>
                <span className="purple">03/2022 – 05/2022</span> : Fullstack Developer - Internship
              </h4>
              <h5 style={{ color: "rgb(155 126 172)", marginBottom: "15px" }}>
                National Center for Informatics (CNI), Tunisia
              </h5>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Technical Stack:
              </p>
              <p style={{ marginBottom: "15px", fontSize: "0.9em" }}>
                TypeScript (Angular), Java (Spring Boot), PostgreSQL, GitHub, Postman
              </p>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Key Achievements:
              </p>
              <ul style={{ marginBottom: "0" }}>
                <li className="about-activity">
                  <ImPointRight /> Development of user interfaces with Angular
                </li>
                <li className="about-activity">
                  <ImPointRight /> Creation and testing of REST APIs with Swagger (unit and integration tests)
                </li>
                <li className="about-activity">
                  <ImPointRight /> Use of Git/GitHub for CI and version control
                </li>
              </ul>
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;