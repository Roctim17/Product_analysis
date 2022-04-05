import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReviews from '../SingleReviews/SingleReviews';
import './Review.css'


const Review = () => {
    const [reviews] = useReview();
    return (
        <div className='review-container'>
            <h1>Total Review :{reviews.length}</h1>
            <div className="review-area">
                {
                    reviews.map(review => <SingleReviews
                        key={review.id}
                        review={review}
                    ></SingleReviews>)
                }
            </div>
        </div>
    );
};

export default Review;