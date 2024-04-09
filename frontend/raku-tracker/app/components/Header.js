'use client'
import React from 'react';
import './Header.css';
import SmallButton from './SmallButton';

const Header = props => {

    return (
        <header>
            <h1 className="header-title">rakuTracker</h1>
            <div className={"buttons"}>
                {props.login && <SmallButton target={'/account/login'} text={"Login"}/>}
                {props.createAccount && <SmallButton target={'/account/create'} text={"Create Account"}/>}
                {props.upload && <SmallButton target={'/account/upload'} text={"Upload"}/>}
                {props.logout && <SmallButton target={'/'} text={"Logout"}/>/*TODO - Implement logout*/}
            </div>
        </header>
    );
};

export default Header;