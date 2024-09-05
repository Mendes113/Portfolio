import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lsr from "../../Assets/Projects/lsr.svg";
import shop from "../../Assets/Projects/shop.png";
import thoth from "../../Assets/Projects/logo (1).png";
import vet from "../../Assets/Projects/veterinary-doctor-examining-a-dog-free-vector.jpg";
import mail from "../../Assets/Projects/mail.png";
import pageNasa from "../../Assets/Projects/pageNasa.png";
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
              imgPath={vet}
              isBlog={false}
              title="Vetsys"
              description="Full api for managing a veterinary, managing vets, animals, medications, consultations and hospitalizations"
              ghLink="https://github.com/Mendes113/vetblock"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="Mail-sender-poem"
              description="Application that sends a poem to a list of emails. The app scrapes a poem from a website and sends it to a list of emails."
              ghLink="https://github.com/Mendes113/mailsenderPoem"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thoth}
              isBlog={false}
              title="Thoth"
              description="Thoth is a powerful tool to support collaborative systematic reviews. Developed as a multi-platform solution, aims to automate important parts of the systematic review process, facilitating and streamlining the work of researchers and professionals involved in this type of study."
              ghLink="https://github.com/Thoth2023"
              demoLink="https://thoth-slr.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lsr}
              isBlog={false}
              title="LSR"
              description="lsr is a simple command-line tool written in Rust for listing and exploring files in a directory. It allows you to list all files or filter them by type, and optionally sort them by size."
              ghLink="https://github.com/Mendes113/lsr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pageNasa}
              isBlog={false}
              title="Today Nasa"
              description="Today Nasa is web application that shows the Astronomy Picture of the Day (APOD) from NASA, and also Rover Photos from Mars. There is algo a telegram bot that sends the APOD to the user."
              ghLink="https://mendes113.github.io/todayNasa/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Price Checker"
              description="Receive notifications about a product you're looking for. This app scrapes Amazon for the product and notifies you about price drops"
              ghLink="https://github.com/Mendes113/priceChecker"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
