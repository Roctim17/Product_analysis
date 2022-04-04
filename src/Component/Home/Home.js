import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import SingleReviews from '../SingleReviews/SingleReviews';
import './Home.css'

const Home = () => {
    const [reviews] = useReview();
    const topThree = reviews.slice(0, 3);
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
                <h1>Customer Reviews ({reviews.length})</h1>
                <div className="topThree-reviews">
                    {
                        topThree.map(review => <SingleReviews
                            key={review.id}
                            review={review}
                        ></SingleReviews>)
                    }
                </div>
                <button className='btn-review'><Link to="/review" >See All Reviews</Link></button>
            </div>
        </div>
    );
};

export default Home;