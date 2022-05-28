import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Service from './Service';

const AllProducts = () => {
    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch('https://radiant-stream-55289.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const navigate = useNavigate()
  const handleBuy = (id) => {
    navigate(`/service/${id}`);
  }
    return (
        <div className='mt-28 mb-5'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Tools We Provide</h2>
            </div>
            
            <div className='wrapper'>
                {
                    services.map(service =>
                    <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default AllProducts;