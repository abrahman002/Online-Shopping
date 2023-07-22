import React from 'react';
import './trending.css'

const TrendingItems = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2   lg:gap-4 gap-3 container-bg lg:p-10  '>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Gaming accessories</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <button>
                        <figure>
                            <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="headsets" />
                        </figure>
                        <h1 className='text-sm'>Headsets</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="keyboards" />
                        </figure>
                        <h1 className='text-sm'>Keyboards</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="Mouse" />
                        </figure>
                        <h1 className='text-sm'>Mouse</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="Chairs" />
                        </figure>
                        <h1 className='text-sm'>Chairs</h1>
                    </button>
                </div>
                <button className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</button>
            </div>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Fashion trends you like</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <button>
                        <figure>
                            <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg" alt="Dresses" />
                        </figure>
                        <h1 className='text-sm'>Dresses</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg" alt="Knits" />
                        </figure>
                        <h1 className='text-sm'>Knits</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg" alt="Jackets" />
                        </figure>
                        <h1 className='text-sm'>Jackets</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg" alt="Jewelry" />
                        </figure>
                        <h1 className='text-sm'>Jewelry</h1>
                    </button>
                </div>
                <button className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</button>
            </div>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Refresh your space</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <button>
                        <figure>
                            <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="Dining" />
                        </figure>
                        <h1 className='text-sm'>Dining</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="Home" />
                        </figure>
                        <h1 className='text-sm'>Home</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Kitchen" />
                        </figure>
                        <h1 className='text-sm'>Kitchen</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="Health and Beauty" />
                        </figure>
                        <h1 className='text-sm'>Health and Beauty</h1>
                    </button>
                </div>
                <button className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</button>
            </div>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Shop deals in Fashion</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <button>
                        <figure>
                            <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="Jeans" />
                        </figure>
                        <h1 className='text-sm'>Jeans under $50 </h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Tops" />
                        </figure>
                        <h1 className='text-sm'>Tops under $25</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="Dresses" />
                        </figure>
                        <h1 className='text-sm'>Dresses under $30</h1>
                    </button>
                    <button>
                        <figure>
                            <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="Shoes" />
                        </figure>
                        <h1 className='text-sm'>Shoes under $50</h1>
                    </button>
                </div>
                <button className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</button>
            </div>
        </div>
    );
};

export default TrendingItems;
