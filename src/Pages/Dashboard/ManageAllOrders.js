import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [user]=useAuthState(auth)
    const[allOrders,setAllOrders]=useState([]);
    const [pending,setPending]=useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/allorder')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[])
    return (
        <div>
            <h2>Total Orders: {allOrders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>orderQuantity</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.userName}</td>
                                <td>{a.orderQuantity}</td>
                                <td>{a.email}</td>
                                <td>{a.name}</td>
                                <td>
                                    {(!a.paid) && <p className='text-primary'>Unpaid</p>}
                                    {(a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                    </div>}
                                </td>
                                <td>
                                    
                                       <button>Pending</button>
                                    
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;