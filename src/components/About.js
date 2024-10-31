import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <p>
        This is a short paragraph about me. I love coding and web development!
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

return <div>About</div>;

export default About;
