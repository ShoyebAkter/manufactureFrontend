import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function ManageDokan() {
    const navigate=useNavigate()
    const { data: shops, isLoading, refetch } = useQuery('shops', () => fetch('https://manufacture-backend.onrender.com/shop', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    
    if (isLoading) {
        return <Loading></Loading>
    }

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
                                            <button
                                            onClick={()=>navigate(`/dashboard/category/${shop._id}`)}
                                              class="btn btn-primary">Products</button>
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

export default ManageDokan