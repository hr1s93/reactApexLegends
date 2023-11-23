import React, { useState } from "react";

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`legend ${isHovered ? "hovered" : ""} ${
        isClicked ? "clicked" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="new-content">
          <h2>{props.class}</h2>
          <p>{props.skills}</p>
        </div>
      ) : (
        <>
          <img src={props.img} alt={props.alt} />
          <div className="name">
            <h1>{props.nickname}</h1>
          </div>
        </>
      )}
    </div>
  );
}
