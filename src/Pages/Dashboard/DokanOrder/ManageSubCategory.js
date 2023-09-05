import React from 'react'
import {  useLocation, useNavigate } from 'react-router'

function ManageSubCategory() {
  const {state}=useLocation()
  const navigate=useNavigate()
    console.log(state);
  return (
    <div>
            <h2 className="text-2xl">Manage Products: </h2>
            {
                state.subcategory.map(subcategory=>
                    <div>
                        <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{subcategory.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        <div class="card-actions justify-center">
                                            <button
                                             onClick={()=> navigate('/dashboard/products',{state:subcategory})}
                                              class="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            }
                 {/* {deletingProduct && <DeleteProductModal
                deletingProduct={deletingProduct}
                // refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteProductModal>} */}
            </div>
  )
}

export default ManageSubCategory