import React, { useEffect, useState } from 'react';

import './Services.css'
import Service from './Service';


const Services = () => {
    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch('https://radiant-stream-55289.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    
    return (
        
        <div className='my-28'>
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

export default Services;