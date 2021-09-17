  
import React from "react";
import {  Image, Row, Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div className="bg-light">
    <h1 className="text-center">About Me</h1>
    <Container>
    <Row> 
    <p>
    I'm a Full Stack Developer with almost a year of experience in responsive web development, both front-end & back-end. I Attended the University of North Carolina at Charlotte, where I received a BS in Criminal Justice & Psychology. I am currently in my third year as a full-time Fraud professional for Wells Fargo
In October 2021, I completed a Certificate in Full Stack Web Development from UNC Charlotte where I learned best practices for designing powerful mobile-friendly websites and applications. I also learned how much I enjoy the coding process, from problem solving to group collaboration, and I am looking forward to starting my professional Web Development career.
    </p>
    <div className="text-center">
      <Image src="img/headshot1.jpg" fluid />
    </div>
    </Row>
    </Container>
  </div>
);
}

export default Homepage;
