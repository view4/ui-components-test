import React from 'react';
import "./button.css";
import plus from "../assets/plus.svg"

const Button = ({text, bg, displayIndicator}) => {
    return (
        <button className="button" style={{background: bg && bg}}>
            { displayIndicator && <img src={plus} />}
            <span>{text} </span>
        </button>
    )
}

export default Button
