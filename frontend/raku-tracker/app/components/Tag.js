'use client'
import React from 'react';
import './Tag.css';

const Tag = (props) => {
    return (
        <button
            className="button"
            type={'button'}
        >
        {props.text}
        </button>
    );
}

export default Tag;