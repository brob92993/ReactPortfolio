import React from "react";
import { Container , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
      <Container> 
      <div className="text-center">
            <ul>
            <li> <Button variant="light" href="tel:+19196087679">Phone: 919.608.7679</Button></li>
            <div>
                
            </div>

            <li><Button variant="light" href="mailto:brob92993@gmail.com">brob92993@gmail.com</Button></li>
            <div>
                
            </div>
            <li><Button variant="light" href= "https://github.com/brob92993">Github Repository</Button></li>
            <div>
                
            </div>
            <li><Button variant="light" href="https://linkedin.com/in/brob92993">LinkdIn Profile</Button></li>
            <div>
                
            </div>

            <li><Button variant="light" href ="../../assets/Brian2021Resume.pdf">My Resume</Button></li>
          </ul>
    </div>
    </Container> 
  );
  }
  
  export default Contact;