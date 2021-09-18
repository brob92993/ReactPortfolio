import React from "react";
import { Container  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
<Container> 
<div className="text-center">
<ul>
<li className="list-group-item">
<a className="list-group-item list-group-item-action" href= "https://github.com/brob92993">View My Github Repository</a>
</li>
<li className= "list-group-item"> 
<a className="list-group-item list-group-item-action" href ="../../assets/Brian2021Resume.pdf">View My Resume</a>
</li>
<li className= "list-group-item"> 
<a className="list-group-item list-group-item-action"  href="mailto:brob92993@gmail.com">brob92993@gmail.com</a>
</li>
<li className= "list-group-item"> 
<a className="list-group-item list-group-item-action" href="https://linkedin.com/in/brob92993">LinkdIn Profile</a>
</li> 

</ul>
</div>
</Container> 
  );
  }
  
  export default Contact;