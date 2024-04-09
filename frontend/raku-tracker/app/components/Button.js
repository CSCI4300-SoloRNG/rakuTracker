'use client'
import React from 'react';
import './Button.css';
import {useRouter} from "next/navigation";

const Button = props => {
    const router = useRouter();
    const newOnClick = props.onClick || (() => router.push(props.target));
    return (
        <button
            className="button"
            type={props.type || 'button'}
            onClick={newOnClick}
        >
            {props.text}
        </button>
    );
}

export default Button;