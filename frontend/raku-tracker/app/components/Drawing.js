import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.img props.prompt props.tags prompts.time
    return (
        <div className="drawing">
            <img
                src={props.img ? props.img :
                    "https://media.discordapp.net/attachments/274311798646374401/1219887367721320509/tumblr_ntrb8rAsbv1qecd9qo6_1280.jpg?ex=662beae4&is=662a9964&hm=8c2293bb32d422426063edfece16df3f9ae6f528b54bbde1eea6b71c0c7c1bd9&"}
                alt="placeholder image"/>
        </div>
    );
};

export default Drawing;