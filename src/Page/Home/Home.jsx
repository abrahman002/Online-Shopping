import React from 'react';
import Banner from '../Banner/Banner';
import Trending from '../TRENDING/Trending';
import './home.css'
import GenderGroup from '../GenderGroup/GenderGroup';

const Home = () => {
    return (
        <div className='home-page'>
            <Banner></Banner>
            <Trending></Trending>
            <GenderGroup></GenderGroup>
   
        </div>
    );
};

export default Home;