import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.img props.prompt props.tags promps.time
    return (
        <div className="drawing">
            <img
                src={props.img ? props.img :
                    "https://media.discordapp.net/attachments/274311798646374401/1219887367721320509/tumblr_ntrb8rAsbv1qecd9qo6_1280.jpg?ex=661f64a4&is=660cefa4&hm=413f06ac8c5951704ea63afcff0b8978e410969fbe0d2a8e784ebee18aabf3a3&=&format=webp&width=902&height=662"}
                alt="placeholder image"/>
        </div>
    );
};

export default Drawing;