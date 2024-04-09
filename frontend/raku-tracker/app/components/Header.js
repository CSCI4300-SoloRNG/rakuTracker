'use client'
import React from 'react';
import './Header.css';
import SmallButton from './SmallButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Header = props => {
    const router = useRouter();
    return (
        <header>
            <h1 className="header-title">rakuTracker</h1>
            <SmallButton onClick={() => router.push('/account/login')} text={"Login"}/>
        </header>
    );
};

export default Header;