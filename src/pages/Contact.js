import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
    return (
      <Container> 
      <div>
            <ul>
            <li><a class="button white" href="tel:+19196087679">Phone: 919.608.7679</a></li>
            <div>
                -
            </div>

            <li><a class=" button white waves-effect waves-light btn-small black-text" href="mailto:brob92993@gmail.com">brob92993@gmail.com</a></li>
            <div>
                -
            </div>
            <li><a class="button white waves-effect waves-light btn black-text" href= "https://github.com/brob92993">Github Repository</a></li>
            <div>
                -
            </div>
            <li><a class="button white waves-effect waves-light btn black-text" href="https://linkedin.com/in/brob92993">LinkdIn Profile</a></li>
            <div>
                -
            </div>

            <li><a class="button white waves-effect waves-light btn black-text" href ="public/assets/Brian2021Resume.pdf">My Resume</a></li>
          </ul>
    </div>
    </Container> 
  );
  }
  
  export default Contact;