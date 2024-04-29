"use client"
import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.img props.prompt props.tags prompts.time
    return props.img && props.img !== "" ? (
        <div className="drawing" onClick={() => location.assign(`/drawing/edit/${props.id}`)}><img
            src={props.img}
            alt="your drawing"
        /></div>
    ) : (
        <div className="drawing">
            <div className="fake-img"></div>
        </div>
    );
};

export default Drawing;