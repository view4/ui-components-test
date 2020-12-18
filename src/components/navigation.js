import React from "react";
import logo from "../assets/logo.svg";
import { navigationInsights, navigationLinks } from "../constants";
import NavigationLink from "./navigationLink";

const Insight = ({ text }) => {
  return <div>{text}</div>;
};

const Navigation = () => {
  return (
    <div className={"navigation-container"}>
      Navigationbar in here.
      <div classsName="nav-header">
        <img src={logo} />
      </div>
      <div cllassName={"nav-links-section"}>
        {navigationLinks.map((link, i) => (
          <NavigationLink text={link} />
        ))}
      </div>
      <div className={"nav-insights-section"}>
        {navigationInsights.map((insight, i) => (
          <Insight text={insight} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
