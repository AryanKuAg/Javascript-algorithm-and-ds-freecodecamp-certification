import React from "react";
import { useParams } from "react-router-dom";

function Feedback() {
  const param = useParams();

  return <div>{param.alemantrix}</div>;
}

export default Feedback;
