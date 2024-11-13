import React from "react";
import { username, city } from "../data/user";  // Importing data from user.js

function Home() {
  return (
    <div id="home">
      <h1>Welcome to {username}'s Portfolio</h1>
      <p>Located in {city}</p>
    </div>
  );
}

export default Home;
