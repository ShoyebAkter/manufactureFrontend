import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3rUSLdVrNtSjVSK1ig1lHKSDiKNUkJFqm5jdP70THP1XTt4TkGECAlheGBukJUnyIgwiElEuz2dXvmH8bXEpXH00q7UmvRxJ');
const Payment = () => {

    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: service, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {service.email}</p>
                    <h2 class="card-title">Please Pay for {service.service}</h2>
                    <p>Your Order: <span className='text-orange-700'>{service.quanity}</span></p>
                    <p>Please pay: ${service.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm service={service} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;