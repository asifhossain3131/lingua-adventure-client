import React from 'react';
import PopularClasses from '../popular classes/PopularClasses';
import HomeSlider from '../slider/HomeSlider';

const Home = () => {
    return (
        <div className='space-y-12'>
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;