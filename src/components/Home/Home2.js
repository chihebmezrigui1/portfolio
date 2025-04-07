import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello and welcome!
              I'm a <i>
                <b className="purple">Data Scientist,</b>
              </i>  combining the power of data with solid development skills to build smart, scalable, and impactful solutions.
              Curious by nature and driven by innovation, I love turning ideas into real, functional products.
              <br />
              <br />I'm also a Fullstack Developer with a strong focus on
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for DevOps by containerizing applications with <i>
                <b className="purple">
                  {" "}
                  Docker
                </b>
              </i>,
              orchestrating them with <i>
                <b className="purple">
                  {" "}
                  Kubernetes
                </b>
              </i>, and deploying them seamlessly to the cloud.
              like
              <i>
                <b className="purple"> Azure</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chihebmezrigui1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chihab-mezrigui-6b0b531ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="mailto:mezrigui.chihab@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <MdOutgoingMail />
              </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
