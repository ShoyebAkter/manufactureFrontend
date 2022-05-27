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
        <img src={service.img} alt="Shoes" class="rounded-xl" />
        </div>
        <div >
          <h2 >{service.name}</h2>
          <p >{service.description}</p>
          <div>
            <button class="btn btn-primary" onClick={() => handleBuy(_id)}>Buy Now</button>
          </div>
        </div>
      
    </div>

  );
};

export default Service;