import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Reviews from './Reviews'
import Footer from './Footer';
import Business from './Business';
import Work from './Work';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Business></Business>
            <Work></Work>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;