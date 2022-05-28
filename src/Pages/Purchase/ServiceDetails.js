import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { useForm } from 'react-hook-form';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [user] = useAuthState(auth);
    const [purchaseQuantity, setPurchaseQuantity] = useState('');
    const [btnDisable, setBtnDisable] = useState("");
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();


    const { data: service, isLoading, refetch } = useQuery(['order', serviceId], () => fetch(`https://radiant-stream-55289.herokuapp.com/service/${serviceId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, description, price, quantity, minimum_quantity } = service;
    let newQuantity;

    const handleButton = event => {
        setPurchaseQuantity(event.target.value);
        if (parseInt(purchaseQuantity) >= minimum_quantity && parseInt(purchaseQuantity) <= quantity) {
            setError('');
            setBtnDisable(false)
        } else {
            setBtnDisable(true);
            setError("Order quantity is not valid");
        }
    }

    const onSubmit = data => {
        const booking = {
            userName:user.displayName,
            name: name,
            status:'',
            quantity: purchaseQuantity,
            email: user.email,
            price:price,
            address: data.address,
            phone: data.phone
        }
        newQuantity = quantity - purchaseQuantity;
        fetch(`https://radiant-stream-55289.herokuapp.com/service/${serviceId}`,{
            method: 'PUT',
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ newQuantity }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    fetch('https://radiant-stream-55289.herokuapp.com/order', {
                        method: 'POST',
                        headers: {
                            'content-type': "application/json",
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(booking),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Your order is complete")
                            }
                        })
                }
                else {
                    toast.error("Cannot place an order");
                }
                data = "";
            })
    }


    return (
        <div>
            <h1 className='text-3xl text-center'>Purchase tools</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="number" placeholder='Quantity' onInput={handleButton} onKeyUpCapture={handleButton} onKeyDownCapture={handleButton} class="input input-bordered w-full max-w-xs" />
                    <span className='text-red-500 text-sm'>{error}</span>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input disabled
                        readOnly
                        type="email"
                        placeholder="Your Email"
                        value={user?.email}
                        className="input input-bordered w-full max-w-xs"
                        {...register("email")}
                    />
                    <label className="label">

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address")}
                    />
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Phone"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone")}
                    />
                </div>
                <input disabled={btnDisable} className='btn  max-w-xs text-white' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default ServiceDetails;