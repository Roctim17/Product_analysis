import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/review" >Review</Link>
                <Link to="/blogs" >Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;