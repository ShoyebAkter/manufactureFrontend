import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';


const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user]=useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    
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
                            
                                orders.map((order, index) => <OrderRow
                                key={order._key}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                    setDeletingOrder={setDeletingOrder}
                                ></OrderRow>)
                            
                        }
                        


                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteConfirmModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;