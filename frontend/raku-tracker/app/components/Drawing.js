import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.img props.prompt props.tags promps.time
    return (
        <div className="drawing">
            <img
                src={props.img}
                alt="placeholder image"/>
        </div>
    );
};

export default Drawing;