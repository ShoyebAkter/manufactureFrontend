import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { userId,carts } = order;
let total;
    return (
        <tr>
            <th>{index + 1}</th>
            
            <td>{userId}</td>
            <td>{
                carts.carts.map(product=>
                    <div>{product.name}</div>
                    )
                }</td>
            <td>{}</td>
            {/* <td>
            {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(price && paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                                    </div>}
                {
                    !paid && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error ml-10">Delete</label>
                }
            </td> */}
        </tr>
    );
};

export default OrderRow;