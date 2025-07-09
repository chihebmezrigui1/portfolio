import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGitlab,
  SiGithub,
} from "react-icons/si";

function CICDTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default CICDTools;
