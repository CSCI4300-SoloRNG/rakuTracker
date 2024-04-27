import React from 'react';
import './Drawing.css';

const Drawing = props => {
    // props.img props.prompt props.tags prompts.time
    return (
        <div className="drawing">
            <img
                src={props.img ? props.img :
                    "https://cdn.discordapp.com/attachments/1008460812710596668/1233141115100860500/rakutrackerSplash.png?ex=662c03a8&is=662ab228&hm=70ab7a90846afd238cf200fc7f0cf2e4c9865aa766e1a4c99f9091d9a996ad29&"}
                alt="placeholder image"/>
        </div>
    );
};

export default Drawing;