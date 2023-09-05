import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';
import { DeviceUUID } from 'device-uuid';


const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const [user]=useAuthState(auth);
    const uuid = new DeviceUUID().get();
    
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://manufacture-backend.onrender.com/order?userId=${uuid}`, {
        method: 'GET',    
    headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    // console.log(orders)
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
                            <th>UserId</th>
                            <th>Orders</th>
                            <th>Price</th>
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