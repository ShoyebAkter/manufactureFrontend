import React, { useEffect, useState } from 'react';

const AllOrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const [status,setStatus]=useState("Pending");


    const handleStatus = () => {
        setStatus("Shipped");
    }
      
    
    
    return (
        <tr>
            <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.email}</td>
                                <td>{order.name}</td>
                                <td>
                                    {(!order.paid) && <p className='text-primary'>Unpaid</p>}
                                    {(order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        
                                    </div>}
                                    {
                                        !order.paid && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                                    }
                                </td>
                                <td>
                                    {
                                        (!order.paid) && <button className='btn btn-primary' onClick={handleStatus} disabled>{status}</button>
                                    }
                                    {
                                        (order.paid) && <button className='btn btn-primary' onClick={handleStatus}>{status}</button>
                                    }
                                    
                                </td>
        </tr>
    );
};

export default AllOrderRow;