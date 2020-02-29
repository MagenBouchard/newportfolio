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
                  Full Stack Web Developer with a background in Education and
                  Learning Management Systems (LMS), providing strong
                  problem-solving skills with a keen eye for aesthetics and
                  presentation. Experience with large-scale projects and
                  advanced communication skills to work independently and in
                  collaborative partnerships. A flexible thinker, open to
                  innovation, and yet realistic in expectations for solving
                  complex problems. With obstacles, seeks alternative ways to
                  leverage interests and systems in achieving defined objectives
                  effectively.
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
