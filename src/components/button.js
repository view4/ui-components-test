import React from 'react';
import "./button.css";

const Button = ({text, bg}) => {
    return (
        <button className="button" style={{background: bg && bg}}>
            {text}
        </button>
    )
}

export default Button
