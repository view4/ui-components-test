import React from "react";
import logo from "../assets/logo.svg";
import { navigationInsights, navigationLinks } from "../constants";
import NavigationLink from "./navigationLink";
import "./navigation.css";

const Insight = ({ insight }) => {
  const { text, indicator, notifications } = insight;
  return (
    <div className={"insights-link-container"}>
      <div className={"insights-link-content"}>
        <img src={indicator} />
        <span className={"insights-link-text"}>{text} </span>
        <span className={"notification-number"}> {notifications} </span>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className={"navigation-container"}>
      <div className={"navigation-upper"}>
        <div className="nav-header">
          <img src={logo} />
        </div>
        <div className={"nav-links-section"}>
          {navigationLinks.map((link, i) => (
            <NavigationLink link={link} isSelected={i === 0} />
          ))}
        </div>
      </div>

      <div className={"nav-insights-section navigation-lower"}>
        <span className="insights-section-text"> Insights </span>
        {navigationInsights.map((insight, i) => (
          <Insight insight={insight} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
