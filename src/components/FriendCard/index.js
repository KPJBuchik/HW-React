import React from "react";
import "./style.css";

function FriendCard (props) {

  return (
    <div 	onClick={() => props.handleClick(props.id, props.clicked)}
    className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      <div className="content">
      </div>
    </div>

  );
}


export default FriendCard;
