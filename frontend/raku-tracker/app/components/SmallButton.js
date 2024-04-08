import React from 'react';
import './SmallButton.css';

const SmallButton = props => {
    return (
        <button
            className="smallbutton"
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default SmallButton;