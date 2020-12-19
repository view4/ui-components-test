import React from 'react';
import "./input.css";

const Input = () => {
    return (
        <div className={"input-container"}>
            <span> Your Full Name </span>
            <input type={"text"} placeholder="Name" />
        </div>
    )
}

export default Input