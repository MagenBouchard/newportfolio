import React from 'react';
import "./links.css"

const linkedinIcon = "http://findicons.com/files/icons/1979/social/50/linkedin.png"
const linkedinLink="https://www.linkedin.com/in/magenbouchard/"


const githubLink ="https://github.com/MagenBouchard"
const githubIcon="https://img.icons8.com/material-sharp/2x/github.png"


const gmailLink="mailto:magen.bouchard@gmail.com?subject=%20Let's%20work%20together!"
const gmailIcon="http://www.cjai.ca/wp-content/uploads/2012/03/email_icon_small.gif"

const resume ="https://drive.google.com/file/d/10rbghJyzPFOs1VL8ZFHstPECFazLBII7/view"
const resumeIcon= "http://icons.iconarchive.com/icons/artdesigner/webtoys/64/Folder-icon.png"


function Links(){
    return (
        <div className="container">
            <hr></hr>
 <div className="holder">
            <div className="row text-center">
   <div className="col-sm "><a href={linkedinLink}>  <img src={linkedinIcon} alt="Linkedin icon"></img>  </a></div>
   <div className="col-sm"><a href={githubLink}>  <img src={githubIcon} alt="github icon"></img>  </a></div>
   <div className="col-sm"><a href={gmailLink}>  <img src={gmailIcon} alt="gmail icon"></img>  </a></div>
   <div className="col-sm"><a href={resume}>  <img src={resumeIcon} alt="resume"></img>  </a></div>
              
            </div>
            <div className="row text-center">
   <div className="col-sm "><div>Linkedin</div></div>
   <div className="col-sm"><div>GitHub</div></div>
   <div className="col-sm"><div>Email</div></div>
   <div className="col-sm"><div>Resume</div></div>
            <hr></hr>  
            </div>
            </div>
        </div>
    )
}

export default Links;