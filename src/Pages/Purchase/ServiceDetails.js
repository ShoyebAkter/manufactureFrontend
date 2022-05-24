import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';
import useServiceDetail from '../Hooks/useServiceDetail';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const [user]=useAuthState(auth);
    const[quantity,setQuantity]=useState(0);

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setQuantity(data.quantity))
    },[quantity])

    const { data: service, isLoading, refetch } = useQuery('available', () => fetch(`http://localhost:5000/service/${serviceId}`)
        .then(res => res.json()))
    
        if(isLoading){
            return <Loading></Loading>
        }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const orderQuantity=parseInt(event.target.orderquantity.value);
        const minimumQuantity=parseInt(service.minimum_quantity);
        if(orderQuantity>minimumQuantity){
            toast.error('cannot oder less than minimum quantity')
        }
        let available=parseInt(service.quantity);
        // console.log(available)
        const remaining=available-orderQuantity;
        const updateproduct={remaining};
        // console.log(service)
        const order={
            orderId:serviceId,
            name:service.name,
            orderQuantity,
            email:user.email,
            userName:user.displayName
        }

        axios.post('http://localhost:5000/order',order)
        .then(res=>{
            const {data}=res;
            if(data.insertedId){
                toast('Order done');
                event.target.reset();
            }
        })
        fetch(`http://localhost:5000/service/${serviceId}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{
            setQuantity(remaining)
        })
        
    }
    

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={service.quantity} name="available" placeholder='available' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" value={service.minimum_quantity} name="minimum_quantity" placeholder='minimum_quantity' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='w-100 mb-2' type="text" name="orderquantity" placeholder='quantity' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default ServiceDetails;