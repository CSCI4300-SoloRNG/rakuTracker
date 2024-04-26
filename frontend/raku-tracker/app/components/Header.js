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
                {props.logout && <SmallButton text={"Logout"} onClick={
                    () => {
                        // clear token cookie
                        document.cookie = "auth_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
                        // refresh page
                        location.assign("/");
                    }
                }/>}
            </div>
        </header>
    );
};

export default Header;