import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="image-area">
                    <img src="image/nike-bat.jpg" alt="" />
                </div>
                <div className="text-area">
                    <h1>Nike Cricket Bat</h1>
                    <h1>English Willow Master Edition</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi autem quisquam at magnam, illum reiciendis placeat maiores ea hic? Quod delectus incidunt velit nihil.</p>
                    <button className='btn-live'>Live demo</button>
                </div>
            </div>
            <div className="top-review-container">
                <h1>Customer Reviews</h1>
                <button>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;