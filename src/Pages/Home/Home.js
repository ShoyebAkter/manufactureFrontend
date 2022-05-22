import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Reviews from './Reviews'

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;