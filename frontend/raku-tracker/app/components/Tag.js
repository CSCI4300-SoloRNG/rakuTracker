'use client'
import React from 'react';
import './Tag.css';

const Tag = (props) => {
    return (
        <button
            className="tag"
            style={{backgroundColor: props.color}}
            type={'button'}
        >
            <div className={'tag-text'}>
            {props.text}
            </div>
        </button>
    );
}

export default Tag;