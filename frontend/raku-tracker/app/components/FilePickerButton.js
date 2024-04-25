'use client'
import React from 'react';
import './SmallButton.css';

const FilePickerButton = props => {
    return (
        <input
            type="file"
            onChange={props.onChange}
            className="small-button"
        >
        </input>
    );
}

export default FilePickerButton;