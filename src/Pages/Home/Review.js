import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card  bg-info-content shadow-xl">
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={review.img} alt=""/>
                </div>
            </div>
            <div class="card-body">
                <h2 class="card-title">
                    {review.name}
                    <div class="badge badge-secondary">{review.location}</div>
                </h2>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default Review;