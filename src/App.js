import React, { Component } from "react";
// import Header from "./components/header/header"
import Projects from "./components/projects/projects.js";
import Links from "./components/links/links";
import Introduction from "./components/introduction/introduction";
// import Dogs from './components/dogs/dogs';
import projects from "./components//projects/projects.json";
import Body from "./components/body/body.js";
import "./App.css";
import Projectheader from "./components/projectheader/projectheader.js";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div className="container">
        {/* <Header/> */}
        <Body>
          <Introduction />
          <Projectheader />

          {this.state.projects.map(projects => (
            <Projects
              id={projects.id}
              name={projects.name}
              image={projects.image}
              description={projects.description}
              githubLink={projects.githubLink}
              link={projects.link}
            />
          ))}

          <Links />
          {/* <Dogs /> */}
        </Body>
      </div>
    );
  }
}

export default App;
