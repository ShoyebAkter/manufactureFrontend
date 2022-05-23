import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';
import useServiceDetail from '../Hooks/useServiceDetail';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetail(serviceId);
    const [user]=useAuthState(auth);
    const [quantity,setQuantity]=useState(0)
    // console.log(service)
    
    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity:event.target.quantity.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response =>{
            const {data} = response;
            console.log(data)
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
        if(parseInt(service.quantity)===0){
            return toast.error('Stock out')
        }
        const orderQuantity=parseInt(event.target.available.value);
        const newQuantity=parseInt(service.quantity)-orderQuantity;
        console.log(newQuantity)

        const updateProduct={newQuantity}

        fetch(`http://localhost:5000/service/${serviceId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data)
            setQuantity(newQuantity)
        })
    }

    

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={service.quantity} name="available" placeholder='available' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='w-100 mb-2' type="text" name="quantity" placeholder='quantity' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default ServiceDetails;