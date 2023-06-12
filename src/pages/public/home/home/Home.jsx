import React from 'react';
import PopularClasses from '../popular classes/PopularClasses';
import HomeSlider from '../slider/HomeSlider';
import Testimonials from '../testimonials/Testimonials';
import PopularInstructors from '../popular instructors/PopularInstructors';

const Home = () => {
    return (
        <div className='space-y-12'>
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;