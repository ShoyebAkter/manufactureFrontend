import React, { useEffect, useState } from 'react';

const AllOrderRow = ({ order, shops, shopId, setDeletingOrder }) => {
    const [status, setStatus] = useState("Pending");

    // console.log(order);
    // console.log(shops);
    let total;


    // findShop()
    // console.log(shopOrder);
    return (
        <>
            {
                order.map((product,index) =>
                    <tr>
                        <th>{index + 1}</th>
                        <td>
                            
                               

                                < div > 
                            < div > { parseInt(product.price) * product.qnty }</div>
                            
                            </div>
                    
                </td >     
                <td>
                {
                    <div>{product.qnty}</div>
                    
                    }</td>     
                <td>
                <div>{
                    <div>{product.name}</div>
                    
                    }</div>
                </td>
</tr >
                )
            }
        </>
    );
};

export default AllOrderRow;
// <tr>
//     <th>{index + 1}</th>
//                         <td>{

//                             }</td>
//                         <td>
//                             {
//                                 order.map(product=>
//                                     <div>{
//                                         <div>{product.qnty}</div>

//                                         }</div>
//                                     )
//                             }
//                         </td>
{/* <td>{order.email}</td> */ }
{
    // order.map(product =>
    //     <div>{
    //         <div>{product.name}</div>

    //     }</div>
    // )
}
{/* <td>
                                    {(!order.paid) && <p className='text-primary'>Unpaid</p>}
                                    {(order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        
                                    </div>}
                                    {
                                        !order.paid && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                                    }
                                </td> */}
{/* <td>
                                    {
                                        (!order.paid) && <button className='btn btn-primary' onClick={handleStatus} disabled>{status}</button>
                                    }
                                    {
                                        (order.paid) && <button className='btn btn-primary' onClick={handleStatus}>{status}</button>
                                    }
                                    
                                </td> */}
        // </tr>
