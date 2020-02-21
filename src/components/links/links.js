import React from 'react';
import "./links.css"
import resumeIcon from "./resume_icon.png"
import gmailIcon from "./gmailIcon.png"
import githubIcon from "./githubIcon.png"
import linkedinIcon from "./linkedinIcon.png"



const linkedinLink="https://www.linkedin.com/in/magenbouchard/"


const githubLink ="https://github.com/MagenBouchard"



const gmailLink="mailto:magen.bouchard@gmail.com?subject=%20Let's%20work%20together!"


const resume ="https://drive.google.com/file/d/10rbghJyzPFOs1VL8ZFHstPECFazLBII7/view"



function Links(){
    return (
        <div className="container">
           
            <hr></hr>
 <div className="holder">
            <div className="row text-center">
   <div className="col-sm"><a href={resume}>   <img src={resumeIcon} alt="resume"></img>  </a></div>
   <div className="col-sm "><a href={linkedinLink}> <img src={linkedinIcon} alt="Linkedin icon"></img>   </a></div><br></br>
   <div className="col-sm"><a href={githubLink}> <img src={githubIcon} alt="github icon"></img>  </a></div>
   <div className="col-sm"><a href={gmailLink}>  <img src={gmailIcon} alt="gmail icon"></img>  </a></div>
              
            </div>
        
            </div>
        </div>
    )
}

export default Links;