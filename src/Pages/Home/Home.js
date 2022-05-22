import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Reviews from './Reviews'
import Footer from './Footer';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;