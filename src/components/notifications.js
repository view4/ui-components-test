import React from 'react';
import notificationIndicator from "../assets/notifications.svg";

const Notifications = () => {
    return (
        <div>
            <span>
                <img src={notificationIndicator} />
                <div className={"notification-number"}> 2</div>
            </span>
        </div>
    )
}

export default Notifications