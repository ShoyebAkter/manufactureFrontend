import React from 'react';
import me from '../../assets/images/me.jpg'

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={me} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl ">Hi My Name is<span className='text-primary'> Shoyeb Akter</span></h1>
                    <h1 class="text-2xl font-bold">Email: <span className='text-primary'>shoyebmohammad660@gmail.com</span></h1>
                    <h1 class="text-2xl font-bold">Educational Background: <span className='text-primary'>Studying in CSE At Baust</span>  </h1>
                    <h2 class="text-3xl ">My Three websites link</h2>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;