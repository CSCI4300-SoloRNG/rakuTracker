'use client'
import React from 'react';
import './Header.css';
import SmallButton from './SmallButton';

const Header = props => {

    return (
        <header>
            <h1 className="header-title">rakuTracker</h1>
            {props.login && <SmallButton target={'/account/login'} text={"Login"}/>}
            {props.createAccount && <SmallButton target={'/account/create'} text={"Create Account"}/>}
        </header>
    );
};

export default Header;