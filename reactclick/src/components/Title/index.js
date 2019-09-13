import React from "react";
import "./style.css";

const Title = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
        </div>


  </div>
);

export default Title;
