import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Video from './Video';
import { Link,useNavigate } from 'react-router-dom';
import Dokan from './Dokan';
import Business from './Business';
import Banner from './Banner';
import Membership from './Membership';

const Home = () => {
    const navigate = useNavigate()
    
  const handleBuy = () => {
    navigate(`/allproducts`);
  }
    
    return (
        <div className='px-12'>
            {/* <Banner></Banner> */}
            {/* <Services></Services> */}
            
              <Dokan></Dokan>
            
            {/* <button onClick={()=>handleBuy()} className='btn btn-primary'>All Tools</button> */}
            <Business></Business>
            {/* <Work></Work> */}
            <Video></Video>
            <Membership></Membership>
            {/* <Reviews></Reviews> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;