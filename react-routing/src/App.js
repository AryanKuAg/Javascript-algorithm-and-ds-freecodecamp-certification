import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Feedback from "./pages/Feedback";

// const navItems = ["homePage", "aboutUs", "contactUs", "feedback"];

function App() {
  const component = (
    <Navigation>
      <p>Home Page</p>
    </Navigation>
  );
  return (
    <div>
      <Routes>
        <Route path="/homePage" element={component} />
        <Route
          path="/aboutUs"
          element={
            <Navigation>
              <AboutUs />
            </Navigation>
          }
        />
        <Route
          path="/contactUs"
          element={
            <Navigation>
              <ContactUs />
            </Navigation>
          }
        />
        <Route
          path="/feedback"
          element={
            <Navigation>
              <Feedback />
            </Navigation>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
