import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="w-6 h-6 ">
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className='nav-header'>

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