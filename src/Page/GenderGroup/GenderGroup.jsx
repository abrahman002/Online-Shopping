import React from 'react';
import { Link } from 'react-router-dom';

const GenderGroup = () => {
    return (
        <div className='lg:grid grid-cols-3 lg:p-10 p-5 lg:ml-20 ml-7  mt-10'>
            <div className="hero w-[300px] h-[400px] mb-10 " style={{ backgroundImage: 'url(https://i.pinimg.com/originals/87/a7/6c/87a76c1fb8a2fcfaae0863980933e40b.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Men Fashion </h1>
                        <button className='btn btn-accent'><Link>See More</Link></button>

                    </div>
                </div>
            </div>
            <div className="hero w-[300px] h-[400px]  mb-10" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/bb/17/58/bb1758ead433950a75f4a4813ce4de6a.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Women's  Fashion</h1>
                        <button className='btn btn-accent'><Link>See More</Link></button>

                    </div>
                </div>
            </div>
            <div className="hero w-[300px] h-[400px]  mb-10" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1620758/pexels-photo-1620758.jpeg?cs=srgb&dl=pexels-victoria-rain-1620758.jpg&fm=jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Children's Fashion </h1>
                        <button className='btn btn-accent'><Link>See More</Link></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenderGroup;