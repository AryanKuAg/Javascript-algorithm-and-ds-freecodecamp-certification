import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>
      AboutUs{" "}
      <button
        onClick={() => {
          //   history.push("/contactUs");
          navigate("/contactUs");
        }}
      >
        What the..
      </button>
    </div>
  );
}

export default AboutUs;
