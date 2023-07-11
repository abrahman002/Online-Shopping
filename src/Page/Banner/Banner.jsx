import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css'
const Banner = () => {

    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            showThumbs={false}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            className="carousel-wrapper"
        >
            <div className="carousel-item">
                <img src="https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg" alt="Slide 1" />
                <div className="carousel-caption w-1/3">
                    <h1 className='text-2xl text-black'>In this season, find the best </h1>
                    <h2 className='text-5xl font-semibold text-black text-ellipsis'>Exclusive collection for everyone</h2>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://img.freepik.com/premium-photo/woman-holding-shopping-bags-with-copy-space_23-2149093539.jpg" alt="Slide 2" />
                <div className="carousel-caption w-1/3">
                    <h1 className='text-2xl text-black'>In this season, find the best </h1>
                    <h2 className='text-5xl font-semibold text-black text-ellipsis'>Exclusive collection for everyone</h2>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/921504204/photo/women-are-shopping-in-the-summer-she-is-using-a-credit-card-and-enjoys-shopping.jpg?s=612x612&w=0&k=20&c=2zGS8aflsH2zNojrpHVmI3FW-ieSp1OB_vVpecaj3qI=" alt="Slide 3" />
                <div className="carousel-caption w-1/3">
                    <h1 className='text-2xl text-black'>In this season, find the best </h1>
                    <h2 className='text-5xl font-semibold text-black text-ellipsis'>Exclusive collection for everyone</h2>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;