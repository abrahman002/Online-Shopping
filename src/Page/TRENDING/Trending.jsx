import React from 'react';
import TrendingItems from '../TrendingItems/TrendingItems';
import RecentAddProducts from '../RecentAddProduct/RecentAddProducts';

const Trending = () => {
    return (
        <div >
           <TrendingItems></TrendingItems>
           <RecentAddProducts></RecentAddProducts>
        </div>
    );
};

export default Trending;