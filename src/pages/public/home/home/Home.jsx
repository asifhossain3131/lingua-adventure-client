import React, { useContext } from 'react';
import PopularClasses from '../popular classes/PopularClasses';
import HomeSlider from '../slider/HomeSlider';
import Testimonials from '../testimonials/Testimonials';
import PopularInstructors from '../popular instructors/PopularInstructors';
import { ThemeContext } from '../../../../providers/DarkProvider';

const Home = () => {
    const{darkMode}=useContext(ThemeContext)
    return (
        <div className={`${darkMode? 'dark':''}space-y-12 `}>
            <HomeSlider></HomeSlider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;