import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';


const MyOrders = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>{
                console.log('res',res);
                // if(res.status===401 || res.status===403){
                //     signOut(auth);
                //     localStorage.removeItem('accessToken');
                //     navigate('/');
                // }
               return res.json();
            })
            .then(data=>{
                setOrders(data);
            });
        }
    },[user])
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{a.orderQuantity}</td>
                                <td>{a.email}</td>
                                <td>{a.name}</td>
                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;