import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      showIndicators={false} 
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
        <img
          src="https://img.freepik.com/free-vector/season-sale_62951-24.jpg"
          alt="Slide 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.freepik.com/premium-psd/special-offer-sale-banner-with-text-editable-3d-style-effect_628935-1183.jpg"
          alt="Slide 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://t3.ftcdn.net/jpg/05/98/27/82/360_F_598278220_gFmdXXeyrJhtw9pfC9P2eBMy8oyrAagw.jpg"
          alt="Slide 3"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
