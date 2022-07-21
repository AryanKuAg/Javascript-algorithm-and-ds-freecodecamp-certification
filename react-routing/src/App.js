import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  const component = (
    <div>
      <p>home page</p> <Link to="/">Link to Home Page</Link>
    </div>
  );
  return (
    <div>
      <Routes>
        <Route path="/" element={component} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
