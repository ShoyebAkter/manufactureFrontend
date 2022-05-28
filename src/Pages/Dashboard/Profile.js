import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user]=useAuthState(auth);
    const [profile,setProfile]=useState([])

    useEffect(()=>{
        fetch('https://radiant-stream-55289.herokuapp.com/profile')
        .then(res=>res.json())
        .then(data=>setProfile(data))
    },[user])
    return (
        <div>
            <h2>Profile: {profile.name}</h2>
        </div>
    );
};

export default Profile;