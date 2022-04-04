import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img src="image/404.jpg" alt="" />
            <br />
            <h3 className='btn-404'><Link to='/' >Back To Home</Link></h3>
        </div>
    );
};

export default NotFound;