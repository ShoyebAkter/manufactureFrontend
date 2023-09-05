import React, { useEffect, useState } from 'react';

import './Services.css'
import Service from './Service';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';


const Category = (props) => {
    const { shopId } = useParams();
    const navigate=useNavigate()
    
    const { data: shop, isLoading, refetch } = useQuery(['order', shopId], () => fetch(`https://manufacture-backend.onrender.com/shop/${shopId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

        // console.log(shop);
    if (isLoading) {
        return <Loading></Loading>
    }

    

    return (

        <div className='mt-28 mb-5'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Tools We Provide {shop.category.length}</h2>
            </div>

            <div className='wrapper'>
                {
                    shop.category.map(category =>
                        <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{category.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        <div class="card-actions justify-center">
                                            <button
                                             onClick={()=> navigate(`/subCategory/${shopId}`,{state:category})}
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

export default Category;