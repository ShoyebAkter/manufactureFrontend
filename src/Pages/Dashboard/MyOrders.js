import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';


const MyOrders = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    // useEffect(()=>{
    //     if(user){
    //         fetch(`http://localhost:5000/order?email=${user.email}`,{
    //             method: 'GET',
    //             headers:{
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         .then(res=>{
    //             console.log('res',res);
    //             if(res.status===401 || res.status===403){
    //                 signOut(auth);
    //                 localStorage.removeItem('accessToken');
    //                 navigate('/');
    //             }
    //             res.json();
    //         })
    //         .then(data=>{
    //             setOrders(data);
    //         })
    //     }
    // },[])
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
        </div>
    );
};

export default MyOrders;