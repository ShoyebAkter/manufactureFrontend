import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../../redux/action';
import {  useParams } from 'react-router';


const Service = ({ service }) => {
  const { shopId } = useParams();
  
  // console.log(uuid);
  const dispatch=useDispatch();
  const handleBuy = () => {
    console.log(service); 
    dispatch(ADD(service,shopId));
  }
  return (

    <div class="item">
      <div>
        <div class="card card-compact w-96 bg-white-100 shadow-xl">
          {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
          <div class="card-body">
            <h2 class="card-title">{service.name}</h2>
            {/* <p>{service.description}</p> */}
            {/* <p>Quantity: {service.quantity}</p> */}
            <div class="card-actions justify-center">
              <button onClick={()=>handleBuy()} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    

  );
};

export default Service;