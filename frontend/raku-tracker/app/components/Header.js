
import React from 'react';
import './Header.css';
import Button from './Button';

const Header = props => {
    return (
        <header>
            <h1 className="header-title">rakuTracker</h1>
            <Button text={"Login"}/>
        </header>
    );
};

export default Header;