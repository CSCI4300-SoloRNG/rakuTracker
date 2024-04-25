'use client'
import React from 'react';
import './SmallButton.css';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

const SmallButton = props => {
    const router = useRouter();

    const newOnClick = props.target ? props.onClick || (() => router.push(props.target)) : props.onClick;

    return (
        <button
            className="small-button"
            type={props.type || 'button'}
            onClick={newOnClick}
        >
            {props.text}
        </button>
    );
}

export default SmallButton;