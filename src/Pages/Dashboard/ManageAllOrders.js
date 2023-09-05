import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import AllOrderRow from './AllOrderRow';
import DelecteConfirmOrder from './DelecteConfirmOrder';

const ManageAllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const { shopId } = useParams();
    const [shopOrder, setShopOrder] = useState([]);
    const [orders, setOrders] = useState()

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch(`https://manufacture-backend.onrender.com/allorder`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(allOrders)

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
                            allOrders.map((order, index) => {
                                order = order.carts.carts.filter(product => product.shopId === shopId)
                                // console.log(order);
                                return (

                                    <AllOrderRow
                                        key={order._key}
                                        order={order}
                                        shopId={shopId}
                                        index={index}
                                        refetch={refetch}
                                        setDeletingOrder={setDeletingOrder}>
                                    </AllOrderRow>
                                )
                            }
                            )

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