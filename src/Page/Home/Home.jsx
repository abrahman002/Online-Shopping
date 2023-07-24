import React from 'react';
import Banner from '../Banner/Banner';
import Trending from '../TRENDING/Trending';
import './home.css'
import GenderGroup from '../GenderGroup/GenderGroup';
import Signup from '../Singup/Signup';
import ElectronicsGroup from '../ElectronicsGroup/ElectronicsGroup';
import Sports from '../Sports/Sports';

const Home = () => {
    return (
        <div className='home-page'>
            <Banner></Banner>
            <Trending></Trending>
            <GenderGroup></GenderGroup>
            <Signup></Signup>
            <ElectronicsGroup></ElectronicsGroup>
           <Sports></Sports>
        </div>
    );
};

export default Home;