import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Services from './Services';
import Reviews from './Reviews'
import Footer from './Footer';
import Business from './Business';
import Work from './Work';
import Membership from './Membership';
import Video from './Video';
import { Link,useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  const handleBuy = () => {
    navigate(`/allproducts`);
  }
    
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <button onClick={()=>handleBuy()} className='btn btn-primary'>All Tools</button>
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