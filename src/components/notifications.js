import React, { useState } from "react";

import { notificationMessages as notifications } from "../constants";

import Button from "./button";

import notificationIndicator from "../assets/notifications.svg";
import activeNotificationIndicator from "../assets/notifications-white.svg";

import "./notifications.css";

const DropdownElement = ({ notification }) => {
  const { title, type, target, time, indicator, indicatorColor } = notification;
  return (
    <div className="notification-item">
      <div className={"notification-profile-photo"}>
        <div className={"notification-indicator-container "} style={{background: indicatorColor}}>
          <img src={indicator} className={"notification-indicator"} />
        </div>
      </div>
      <div className={"notification-item-main"}>
        <span>{title}</span>

        <span>
          {type} <a className={"notification-link"}>{target}</a>
        </span>
      </div>
      <span className={"notification-time"}>{time}</span>
    </div>
  );
};

const Notifications = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={"notifications-container"}>
      <div
        className="notifications-indicator-container"
        onClick={() => !setIsActive(!isActive)}
        style={{ background: isActive && "#6C5DD3" }}
      >
        <img
          src={isActive ? activeNotificationIndicator : notificationIndicator}
        />
        <div className={"notification-number"}> 2</div>
      </div>
      <div className={"notification-items-container"}>
        {isActive && (
          <>
            <span className={"notifcations-text"}> Recent notifications </span>
            {notifications.map((notification, i) => (
              <DropdownElement notification={notification} key={i} />
            ))}
            <Button text={"See all incoming activity"} />
          </>
        )}
      </div>
    </div>
  );
};

export default Notifications;
