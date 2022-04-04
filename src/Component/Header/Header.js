import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <h1><CustomLink to="/" >Home</CustomLink></h1>
                <h1><CustomLink to="/review" >Review</CustomLink></h1>
                <h1><CustomLink to="/dashboard" >DashBoard</CustomLink></h1>
                <h1><CustomLink to="/blog" >Blogs</CustomLink></h1>
                <h1><CustomLink to="/about" >About</CustomLink></h1>
            </nav>
        </div>
    );
};

export default Header;