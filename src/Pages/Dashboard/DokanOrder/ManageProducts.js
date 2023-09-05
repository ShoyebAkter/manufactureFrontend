import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function ManageProducts() {
    const { state } = useLocation()
    const navigate=useNavigate();
    console.log(state);
    return (
        <div >

            <div style={{ "display": "flex" }}>
            {
                state.products.map(product =>
                    <div>
                        <div class="item">
                            <div>
                                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                                    {/* <figure><img src={service.img} alt="Shoes" /></figure> */}
                                    <div class="card-body">
                                        <h2 class="card-title">{product.name}</h2>
                                        {/* <p>{service.description}</p> */}
                                        {/* <div class="card-actions justify-center">
                                            <button
                                             onClick={()=> navigate('/dashboard/products',{state:subcategory})}
                                              class="btn btn-primary">Buy Now</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
            <button
             onClick={()=> navigate('/dashboard/addproduct')}
            class="btn btn-info">Add</button>
            {/* {deletingProduct && <DeleteProductModal
                deletingProduct={deletingProduct}
                // refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteProductModal>} */}
        </div>
    )
}

export default ManageProducts