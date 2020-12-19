import React from "react";
import rightChevron from "../assets/navigation/right.svg";

const NavigationLink = ({ link, isSelected }) => {
  const { text, indicator } = link;
  return (
    <div
      className={"nav-link-container"}
      style={{ borderLeft: isSelected && "3px solid #6C5DD3" }}
    >
      <div className={"nav-link-content"}>
        <img src={indicator} />

        <span className="nav-link-text">{text} </span>
        <img src={rightChevron} />
      </div>
    </div>
  );
};

export default NavigationLink;
