import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, refetch, setDeletingOrder }) => {
    const { name, quantity, price, email,paid,transactionId,_id } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>
            {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(price && paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{transactionId}</span></p>
                                    </div>}
                {
                    !paid && <label onClick={() => setDeletingOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                }
            </td>
        </tr>
    );
};

export default OrderRow;