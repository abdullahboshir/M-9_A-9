import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            {/* <CustomLink to = '/'></CustomLink> */}
            <CustomLink to = '/home'>HOME</CustomLink>
            <CustomLink to = '/review'>RIVIEW</CustomLink>
            <CustomLink to = '/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to = '/blogs'>BLOGS</CustomLink>
            <CustomLink to = '/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;