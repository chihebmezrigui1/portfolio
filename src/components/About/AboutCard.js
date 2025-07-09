import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chihab MEZRIGUI </span>
            <br />
            a Master’s student in BIG DATA & IA at IPSSI Paris .
            <br />
            I’m currently in my final year (Master 2) and on track to graduate this year.
            <br />
            Alongside my studies , I work in alternance at RDIUP, gaining hands-on experience while applying my skills in european projects.             
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to create meaningful tech that solves real problems.!"{" "}
          </p>
          <footer className="blockquote-footer">CHIHAB</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
