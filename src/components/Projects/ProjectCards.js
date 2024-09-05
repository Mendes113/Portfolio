import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view"  >
      <Card.Img variant="top" src={props.imgPath} alt="card-img"
        style={{ width: '100%', height: '300px'}}
      />
      <Card.Body className="d-flex flex-column justify-content-between ">
        <div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        </div>
      <div className="mt-3">
        <Button variant="primary" href={props.ghLink} target="_blank" className="align-self-center">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
