import React, { useEffect, useState } from 'react';

import './Services.css'
import { Link } from 'react-router-dom';


const Dokan = () => {
    const [shops, setShops] = useState([]);
    

    useEffect(() => {
        fetch('https://manufacture-backend.onrender.com/shop')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])
    console.log(shops);
    return (

        <div className='mt-28 mb-5'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Tools We Provide {shops.length}</h2>
            </div>

            <div className='wrapper'>
                {
                    shops.map(shop =>
                        <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{shop.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        <div class="card-actions justify-center">
                                            <Link to={`shop/${shop._id}`}   class="btn btn-primary">Buy Now</Link>
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

export default Dokan;