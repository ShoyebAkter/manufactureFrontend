import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal';
import DeleteProductModal from '../DeleteProductModal';
import Product from '../Product';
import { useLocation, useNavigate, useParams } from 'react-router';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const navigate=useNavigate()
    const { shopId } = useParams();
    // console.log(state);


    const { data: shop, isLoading, refetch } = useQuery(['order', shopId], () => fetch(`https://manufacture-backend.onrender.com/shop/${shopId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    
        if (isLoading) {
            return <Loading></Loading>
        }
// console.log(shop);
    return (
        <div>
            <h2 className="text-2xl">Manage Products: </h2>
            {
                shop.category.map(category=>
                    <div>
                        <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{category.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        <div class="card-actions justify-center">
                                            <button
                                             onClick={()=> navigate('/dashboard/subcategory',{state:category})}
                                              class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            }
                 {deletingProduct && <DeleteProductModal
                deletingProduct={deletingProduct}
                // refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteProductModal>}
            </div>
           
        
    );
};

export default ManageProducts;