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
                    <p>Nike has done it again with a ground-breaking cricket bat design.

                        The Nike Drive cricket bat is made of genuine Grade 3 English Willow, which is air dried naturally.

                        The short handled bat boasts enormously large edges to the blades, for an addictively satisfying sweet spot when it comes to ball contact.
                        The cricket bat has a spectacularly light pick up and an enviable extended bow that makes it totally irresistible.

                        This bat meets Nike’s international standards of excellence, with a superb natural finish.</p>
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