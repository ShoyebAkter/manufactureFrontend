import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate=useNavigate()
      const handleBuy=()=>{
        navigate('/purchase');
      }
    return (
        
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                    <button className='btn btn-primary' onClick={handleBuy}>Buy Now</button>
                </div>
            </div>
        
    );
};

export default Service;