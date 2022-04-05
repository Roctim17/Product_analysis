import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>

            <nav className='nav-header relative '>
                <div className="nav-title"><h1>Product Review</h1></div>
                <div onClick={() => setOpen(!open)} className="w-10 h-10 md:hidden">
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={` justify-center absolute md:static  w-full duration-500 ${open ? 'top-8' : 'top-[-190px]'}`}>
                    <li><CustomLink to="/" >Home</CustomLink></li>
                    <li><CustomLink to="/review" >Review</CustomLink></li>
                    <li><CustomLink to="/dashboard" >DashBoard</CustomLink></li>
                    <li><CustomLink to="/blog" >Blogs</CustomLink></li>
                    <li><CustomLink to="/about" >About</CustomLink></li>
                </ul>

            </nav>


        </div>
    );
};

export default Header;