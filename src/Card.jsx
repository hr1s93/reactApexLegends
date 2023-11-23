import React, { useState } from "react";

export default function Card(props) {
  const [isActive, setIsActive] = useState(false);

  const handleHover = () => {
    setIsActive(true);
  };

  const handleUnhover = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };

  const hoverEvents = isTouchDevice()
    ? { onTouchStart: handleHover, onTouchEnd: handleUnhover }
    : { onMouseEnter: handleHover, onMouseLeave: handleUnhover };

  const clickEvent = isTouchDevice() ? { onClick: handleClick } : {};

  return (
    <div
      className={`legend ${isActive ? "hovered" : ""}`}
      {...hoverEvents}
      {...clickEvent}
    >
      {isActive ? (
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
