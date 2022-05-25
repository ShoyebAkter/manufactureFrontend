import React from 'react';
import notfound from '../../assets/images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
        <img className='w-full h-80' src={notfound} alt="" />
        <h2 className='text-8xl text-center'>O<span className='text-7xl'>ops</span></h2>
        <h2 className='text-center text-5xl'>Page not found</h2>
    </div>
    );
};

export default NotFound;