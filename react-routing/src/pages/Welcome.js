import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <p>Welcome</p>
      <Link to="/">Link to Home Page</Link>
    </div>
  );
}

export default Welcome;
