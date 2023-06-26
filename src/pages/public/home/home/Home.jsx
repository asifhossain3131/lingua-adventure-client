import React, { useContext } from 'react';
import PopularClasses from '../popular classes/PopularClasses';
import HomeSlider from '../slider/HomeSlider';
import Testimonials from '../testimonials/Testimonials';
import PopularInstructors from '../popular instructors/PopularInstructors';
import { ThemeContext } from '../../../../providers/DarkProvider';
import Gallery from '../gallery/Gallery';
import Facilities from '../facilities/Facilities';
import Blogs from '../blogs/Blogs';
import Experts from '../experts/Experts';

const Home = () => {
    const{darkMode}=useContext(ThemeContext)
    return (
        <div className={`${darkMode? 'dark':''}space-y-12 `}>
            <HomeSlider></HomeSlider>
            <Gallery></Gallery>
            <Experts></Experts>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Facilities></Facilities>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;