import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testomonial = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allreview')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <section className='my-28'>
            
                <div>
                    <h4 className="text-xl text-primary font-bold text-center">Testimonials</h4>
                    <h2 className='text-3xl'>What our Customers say</h2>
                </div>
                
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testomonial;