import React, { useState } from 'react';
import notificationIndicator from "../assets/notifications.svg";
import { notifications } from '../constants';

const DropdownElement = ({ notification }) => {
    const { title, type, target, time } = notification
    return (
      <div>
        <span>Circle here</span>
        <div> {title} <span> {type} {target} </span></div>
        <span>{time}</span>
      </div>
    );
  };


const Notifications = () => {
    const [ isActive, setIsActive ] = useState(false);
    return (
        <div>
            <span onClick={() => !setIsActive(!isActive)}>
                <img src={notificationIndicator} />
                <div className={"notification-number"}> 2</div>
            </span>
            {
                isActive && notifications.map((notification, i) => <DropdownElement notification={notification} key={i} />)
            }
        </div>
    )
}

export default Notifications