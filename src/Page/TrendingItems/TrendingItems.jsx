import React from 'react';
import './trending.css'
import { Link } from 'react-router-dom';

const TrendingItems = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2   lg:gap-4 gap-3 container-bg lg:p-10  '>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Gaming accessories</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <div>
                        <Link>
                            <figure>
                                <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="headsets" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Headsets</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="keyboards" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Keyboards</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="Mouse" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Mouse</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="Chairs" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Chairs</h1>
                    </div>
                </div>
                <Link className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</Link>
            </div>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Fashion trends you like</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <div>
                        <Link>
                            <figure>
                                <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg" alt="Dresses" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Dresses</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg" alt="Knits" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Knits</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg" alt="Jackets" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Jackets</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg" alt="Jewelry" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Jewelry</h1>
                    </div>
                </div>
                <Link className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</Link>
            </div>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Refresh your space</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <div>
                        <Link>
                            <figure>
                                <img className=' lg:h-[158px] h-[100px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="Dining" />
                            </figure>
                        </Link>
                        <h1 className='text-xs'>Dining</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[100px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="Home" />
                            </figure>
                        </Link>
                        <h1 className='text-xs'>Home</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[100px]' src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Kitchen" />
                            </figure>
                        </Link>
                        <h1 className='text-xs'>kitchen and cooking</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[100px]' src="https://cdn.shopify.com/s/files/1/0583/6151/2145/collections/Beauty_Health_Personal_Care_1200x1200.jpg?v=1625293444" alt="Health and Beauty" />
                            </figure>
                        </Link>
                        <h1 className='text-xs'>Health and Beauty</h1>
                    </div>
                </div>
                <Link className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</Link>
            </div>
            <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Shop deals in Fashion</h2>
                <div className="card grid grid-cols-2 gap-4 lg:p-3 p-3">
                    <div>
                        <Link>
                            <figure>
                                <img className=' lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="Jeans" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Jeans under $50 </h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Tops" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Tops under $25</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="Dresses" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Dresses under $30</h1>
                    </div>
                    <div>
                        <Link>
                            <figure>
                                <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="Shoes" />
                            </figure>
                        </Link>
                        <h1 className='text-sm'>Shoes under $50</h1>
                    </div>
                </div>
                <Link className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</Link>
            </div>
        </div>
    );
};

export default TrendingItems;
