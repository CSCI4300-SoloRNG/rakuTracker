"use client"
import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.url props.prompt props.tags prompts.time
    return props.url && props.url !== "" ? (
        <div className="drawing" onClick={() => location.assign(`/drawing/edit/${props._id}`)}><img
            src={props.url}
            alt="your drawing"
        /></div>
    ) : (
        <div className="drawing">
            <div className="fake-img"></div>
        </div>
    );
};

export default Drawing;