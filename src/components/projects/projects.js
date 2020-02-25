import React from "react";
import "./project.css";


function Projects(props) {
  return (
    

      <div className="holder">
      <div className="card">

        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
      <h1 className="projectName"> <a href={props.link}>  {props.name} </a></h1>     
          <p><strong> {props.description} </strong></p>
          <p ><strong > <a className="text-left" href={props.link}> Project Link </a>  </strong></p>
          <p><strong > <a href={props.githubLink}> Github Link</a>   </strong>  </p>
            
        </div>
      </div>  
      </div>

 
  );
}

export default Projects;
