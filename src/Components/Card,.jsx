import React from "react";

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: "#f1faee",
        width: "40%",
        minHeight: "180px",
        height: "25%",
        padding: "30px",
        borderRadius: "20px",
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
}

export default Card;
