"use client"
import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.img props.prompt props.tags prompts.time
    return (
        <div className="drawing" onClick={()=>location.assign(`/drawing/edit/${props.id}`)}>
            {props.img && props.img !== ""? (
                <img
                    src={props.img}
                    alt="your drawing"
                />
            ) : (
                <img
                src={"https://lh3.googleusercontent.com/drive-viewer/AKGpihYP_KEg2Tbfjo5ZefSLuwWh9XPUtmyXHAvrE5Bu2SNPIkoOprCHhPX0SUWrXK2dUzH5EH_0jH288tXucx13b7AsrjirCDOE_Q=s1600-rw-v1"}
                alt="your drawing"
                />
            )}
        </div>
    );
};

export default Drawing;