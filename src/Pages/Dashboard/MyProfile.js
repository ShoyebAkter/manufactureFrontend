import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user]=useAuthState(auth);
   
    

    const { data: myProfile, isLoading, refetch } = useQuery('myProfile', () => fetch(`http://localhost:5000/profile?email=${user.email}`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleUpdate=()=>{
        
    }


    const handleSubmit=(event)=>{
        event.preventDefault();

        const profile={
            email:user.email,
            userName:user.displayName,
            education:event.target.education.value,
            location:event.target.location.value,
            phonenumber:event.target.phonenumber.value
        }

        axios.post('http://localhost:5000/profile',profile)
        .then(res=>{
            const {data}=res;
            if(data.insertedId){
                toast('Profile created');
                event.target.reset();
            }
            refetch()
        })
    }
    return (
        <div>
            <h2>Profile of : {myProfile.userName}</h2>
            <form onSubmit={handleSubmit}>
                <input className='w-100 mb-2 text-base-300' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2 text-base-300' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                
                <input className='w-100 mb-2 text-base-300' type="text" value={myProfile.education} name="education" placeholder='education' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2 text-base-300' type="text" value={myProfile.location} name="location" placeholder='location' required />
                <br />
                <input className='w-100 mb-2 text-base-300' type="text" value={myProfile.phonenumber} name="phonenumber" placeholder='phonenumber' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Add" />
                
            </form>
            <button onClick={handleUpdate} className='btn btn-primary px-auto' >Update Profile</button>
        </div>
    );
};

export default MyProfile;