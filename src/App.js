import React, { Fragment } from "react";
import "./styles/style.css";

function App() {
  return (
    <Fragment>
      <nav>
        <div className="nav-item hvr-grow">
          <a href="#about-me">About Me</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#experience">Experience</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#blog">Blog</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#skills">Skills</a>
        </div>
        <div className="nav-item hvr-grow">
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </Fragment>
  );
}

export default App;
