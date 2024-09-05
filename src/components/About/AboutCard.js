import React from "react";
import Card from "react-bootstrap/Card";
import { FaBook, FaGamepad, FaVideo, FaYoutube } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Andre L M Miranda </span>
            from <span className="purple"> Brazil</span>
            <br />
            I am currently employed as a interning at <span className="purple">Compass.Uol</span>
            <br />
           I'm completing my degree in <span className="purple">Software Engineer</span> from <span className="purple">Universidade Federal Do Pampa</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaGamepad /> Playing Games
            </li>
            <li className="about-activity">
              <FaYoutube /> Watching Tech Content
            </li>
            <li className="about-activity">
              <FaBook /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If we train our conscience, it will kiss us at the very moment it bites us"{" "}
          </p>
          <footer className="blockquote-footer">Nietzsche</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
