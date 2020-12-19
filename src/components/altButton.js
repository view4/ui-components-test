import React from 'react';
import "./button.css"

const AltButton = ({text, indicator}) => {
    return (
        <button className="alt-button">
            <img src={indicator} />
            <span>{text} </span>
        </button>
    )
}

export default AltButton