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
                <p className="">
                  
                I am a Full Stack Web Developer with strong problem-solving skills with a sharp eye for aesthetics and presentation, extensive knowledge in Education and Learning Management Systems (LMS). Not only do I have experience with large scale projects within the education system, but I also possess advanced communication skills to work in both independently and in collaborative partnerships. I am equal parts innovative and realistic allowing myself to craft realistic expectations and develop simple solutions to complex problems that leverage and drive efficiencies.
                </p>
              </div>
              <br></br>
              <br></br>
             

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
