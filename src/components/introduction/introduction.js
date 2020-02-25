import React from "react";
import "./introduction.css";
import nick from "./IMG_8267(1).JPG";
// import cold from './2.jpg'

function Introduction() {
  return (
    <div className="container">
      <div className=" items">
        <div className="introrow">
          <div className="row">
            <div className="col-sm-6">
              <hr></hr>
              <h1 className="style-heading">Hi, I am Magen! </h1>
              <hr></hr>
              <div className="intromessage">
                Full Stack Web Developer with a background in Instructional
                Design and Technology as well as Learning Management Systems.
                Motivated by designing practical and aesthhetically pleasing
                applications.
              </div>
              <br></br>
              <br></br>
              <hr></hr>

            </div>

            <div className="col-sm-6">
              <img className="img-style1" src={nick} alt="nick and i"></img>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
