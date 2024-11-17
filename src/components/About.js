import React from "react";
import { image } from "../data/user"; // Import the image from user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        This is a brief description about myself and my journey as a web
        developer.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
