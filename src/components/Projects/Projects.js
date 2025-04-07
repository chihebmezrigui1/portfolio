import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prediction_insurance from "../../Assets/Projects/prediction_insurance.png";
import JoParis from "../../Assets/Projects/JOPARIS.png";
import hacktweetImage from "../../Assets/Projects/hacktweet.png";
import n_gram from "../../Assets/Projects/n_gram.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hacktweetImage}
              isBlog={false}
              title="HackTweet"
              description={
                <>
                  A Full-Stack Social Media Cross Platform 
                  Quickly developed with all essential features:
                  <br/>
                  <br />
                  ✅ Post text & images
                  <br />
                  ✅ Like, comment, repost, and bookmark
                  <br />
                  ✅ Real-time notifications
                  <br />
                  ✅ Follow users & chat one-on-one
                  <br />
                  <br />
                  <b>🛠️ Tech Stack:</b>
                  <br />
                  Frontend: React.js + Vite
                  <br />
                  Backend: Node.js + Express
                  <br />
                  Database: MongoDB Atlas
                  <br />
                  Real-Time: WebSockets
                  <br />
                  Image Uploads: Cloudinary
                  <br />
                  Deployment: Docker + Render
                </>
              }
              ghLink="https://github.com/chihebmezrigui1/Hacktweet"
              demoLink="https://hacktweet.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JoParis}
              isBlog={false}
              title="Predictions JO Paris 2024"
              description="This Web Application aims to predict the number of medals that countries will 
              win in the Summer Olympics of 2024 in Paris. The project includes a backend built with Express, a frontend built with React and Ant Design,
              and a series of Jupyter notebooks for data analysis and model training."
              ghLink="https://github.com/arnaudlagarde/HackatonMIA8"
              demoLink="https://frontend-hackathon-ashy.vercel.app/dashboard"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prediction_insurance}
              isBlog={false}
              title="Predicts medical insurance"
              description="This project predicts medical insurance charges using linear regression. 
              It involves data preprocessing, model training, and sensitivity analysis. 
              Technologies used include Python, Jupyter Notebook, pandas, scikit-learn, Streamlit, and Docker."
              ghLink="https://github.com/chihebmezrigui1/insurance_prediction"
              demoLink="https://insurancepredic.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={n_gram}
              isBlog={false}
              title="Analyze N-gram Data"
              description="Ce projet consiste à créer des fonctions en Python permettant d'interagir 
              avec l'API Google Sheets via Google Cloud Platform,
              ainsi qu'à effectuer une analyse n-gram sur les données collectées.."
              ghLink="https://github.com/chihebmezrigui1/Analyse_N_gram_DATA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
