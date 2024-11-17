import React from "react";
import { username, city } from "../data/user"; // Import the username and city from the user.js file

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
