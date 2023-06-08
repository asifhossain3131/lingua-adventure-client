import React from 'react';
import PopularClasses from '../popular classes/PopularClasses';
import HomeSlider from '../slider/HomeSlider';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
    return (
        <div className='space-y-12'>
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;