import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const{_id}=service;
    const navigate=useNavigate()
      const handleBuy=(id)=>{
        navigate(`/service/${id}`);
      }
    return (
        
            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                    <p>Minimum Quantity:{service.minimum_quantity}</p>
                    <p>Quantity:{service.quantity}</p>
                    <button className='btn btn-primary' onClick={()=>handleBuy(_id)}>Buy Now</button>
                </div>
            </div>
        
    );
};

export default Service;