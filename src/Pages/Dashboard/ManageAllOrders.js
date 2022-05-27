import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AllOrderRow from './AllOrderRow';
import DelecteConfirmOrder from './DelecteConfirmOrder';

const ManageAllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);

    const [user]=useAuthState(auth)
    const [pending,setPending]=useState(true);

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch(`http://localhost:5000/allorder`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    
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
                            allOrders.map((order, index) => <AllOrderRow
                            key={order._key}
                                    order={order}
                                    index={index}
                                    refetch={refetch}
                                    setDeletingOrder={setDeletingOrder}>

                            </AllOrderRow>)
                        }


                    </tbody>
                </table>
            </div>
            {deletingOrder && <DelecteConfirmOrder
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DelecteConfirmOrder>}
        </div>
    );
};

export default ManageAllOrders;