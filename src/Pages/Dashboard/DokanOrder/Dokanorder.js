import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Dokanorder() {
    const [shops, setShops] = useState([]);
    

    useEffect(() => {
        fetch('https://manufacture-backend.onrender.com/shop')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])
  return (
    <div>
        {
            shops.map(shop=>
                <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{shop.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        <div class="card-actions justify-center">
                                            <Link
                                             to={`/dashboard/shops/${shop._id}`}   class="btn btn-primary">Orders</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
        }
    </div>
  )
}

export default Dokanorder