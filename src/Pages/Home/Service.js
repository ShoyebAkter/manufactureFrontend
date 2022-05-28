import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const { _id } = service;
  const navigate = useNavigate()
  const handleBuy = (id) => {
    navigate(`/service/${id}`);
  }
  return (

    <div class="item">
      <div>
        <div class="card card-compact w-96 bg-white-100 shadow-xl">
          <figure><img src={service.img} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">{service.name}</h2>
            <p>{service.description}</p>
            <p>Quantity: {service.quantity}</p>
            <div class="card-actions justify-center">
              <button onClick={()=>handleBuy(_id)} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    

  );
};

export default Service;