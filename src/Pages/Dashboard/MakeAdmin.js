import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Admin from './Admin';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://manufacture-backend.onrender.com/user', {
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));
    console.log(users)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Make Admin</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=><Admin
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></Admin>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MakeAdmin;