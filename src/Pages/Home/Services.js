import React, { useEffect, useState } from 'react';

import './Services.css'
import Service from './Service';
import { useLocation } from 'react-router';


const Services = () => {
    const { state } = useLocation();
    console.log(state);
    
    
    return (
        
        <div className='mt-28 mb-5'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Tools We Provide</h2>
            </div>
            
            <div className='wrapper'>
                {
                    state.products.map(product =>
                    <Service
                        service={product}
                    ></Service>)
                }
            </div>
            
        </div>
        
    );
};

export default Services;