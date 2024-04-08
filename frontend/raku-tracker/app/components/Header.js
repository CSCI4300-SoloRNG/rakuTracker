
import React from 'react';
import './Header.css';
import SmallButton from './SmallButton';

const Header = props => {
    return (
        <header>
            <h1 className="header-title">rakuTracker</h1>
            <SmallButton text={"Login"}/>
        </header>
    );
};

export default Header;