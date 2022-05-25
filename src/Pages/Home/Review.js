import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img class="mask mask-decagon w-20" src={review.img} /></figure>
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