import React, { useEffect, useState } from 'react';

import './Services.css'
import Service from './Service';
import { useLocation, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Subcategory = (props) => {
    const [subCategories, setSubCategories] = useState([]);
    const { shopId } = useParams();
    const navigate=useNavigate()
    const { state } = useLocation();
    console.log(state);
    
    
    return (

        <div className='mt-28 mb-5'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Tools We Provide {state.subcategory.length}</h2>
            </div>

            <div className='wrapper'>
                {
                    state.subcategory.map(subcategory =>
                        <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{subcategory.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        <div class="card-actions justify-center">
                                            <button 
                                            onClick={()=>navigate(`/product/${shopId}`,{state:subcategory})}
                                            class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>

    );
};

export default Subcategory;