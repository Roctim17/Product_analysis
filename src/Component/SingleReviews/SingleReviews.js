import React from 'react';
import './SingleReviews.css'

const SingleReviews = ({ review }) => {
    const { name, comment, rating, image } = review;
    return (
        <div className='SingleReviews-container'>
            <div className="SingleReviews-img">
                <img src={image} alt="" />
            </div>
            <div className="SingleReviews-text">
                <h3>{name}</h3>
                <p>{comment}</p>
                <h5>Rating : {rating} out of 5</h5>
            </div>


        </div>
    );
};

export default SingleReviews;