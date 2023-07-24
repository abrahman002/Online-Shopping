import React from 'react';

const Sports = () => {
    return (
        <div className='mt-10px'>
            <div className='lg:p-10 p-2' style={{ backgroundColor: '#e9e7e0' }}>
                <h1 className='text-3xl font-bold mb-5'>Sports</h1>
                <div className='grid lg:grid-cols-4 grid-cols-2   lg:gap-4 gap-3   '>
                    <div className=' bg-base-100 z-0 lg:w-72 w-44 mx-auto rounded-md '>
                        <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Beauty picks</h2>
                        <div className="card lg:p-3 p-3">
                            <button>
                                <figure>
                                    <img className=' lg:h-[350px]  h-[210px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" alt="headsets" />
                                </figure>
                                <h1 className='text-sm'>Beauty picks</h1>
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
                        <h2 className="lg:text-2xl text-sm font-bold text-center mt-2 lg:mb-0 ">Health & Personal Care</h2>
                        <div className="card lg:p-3 p-3">
                            <button>
                                <figure>
                                    <img className=' lg:h-[350px]  h-[235px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" alt="Health & Personal Care" />
                                </figure>
                                <h1 className='text-sm'>Health & Personal Care</h1>
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
                                <h1 className='text-xs'>Jeans under $50 </h1>
                            </button>
                            <button>
                                <figure>
                                    <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Tops" />
                                </figure>
                                <h1 className='text-xs'>Tops under $25</h1>
                            </button>
                            <button>
                                <figure>
                                    <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg" alt="Dresses" />
                                </figure>
                                <h1 className='text-xs'>Dresses under $30</h1>
                            </button>
                            <button>
                                <figure>
                                    <img className='lg:h-[158px] h-[87px]' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg" alt="Shoes" />
                                </figure>
                                <h1 className='text-xs'>Shoes under $50</h1>
                            </button>
                        </div>
                        <button className='lg:ml-5 ml-2 text-sm text-sky-500 mb-3'>See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;