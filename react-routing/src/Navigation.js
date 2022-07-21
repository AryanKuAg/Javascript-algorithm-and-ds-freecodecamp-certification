import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const navItems = ["homePage", "aboutUs", "contactUs", "feedback"];

function Navigation(props) {
  return (
    <React.Fragment>
      {" "}
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            fontSize: "20px",
          }}
        >
          {navItems.map((nav) => (
            <li>
              <NavLink activeClassName="active" to={`/${nav}`}>
                {nav}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {props.children}
    </React.Fragment>
  );
}

export default Navigation;
