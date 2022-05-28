import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Reviews from './Reviews'
import Footer from './Footer';
import Business from './Business';
import Work from './Work';
import Membership from './Membership';
import Video from './Video';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Business></Business>
            <Work></Work>
            <Video></Video>
            <Membership></Membership>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;