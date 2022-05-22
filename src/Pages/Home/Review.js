import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={review.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {review.name}
                    <div class="badge badge-secondary">{review.location}</div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
            </div>
        </div>
    );
};

export default Review;