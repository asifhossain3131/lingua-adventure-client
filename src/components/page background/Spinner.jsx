import React from 'react';
import spinner from '../../../public/9844-loading-40-paperplane.json'
import Lottie from "lottie-react";


const Spinner = () => {
    return (
        <div className='w-[400px] lg:w-[600px] flex justify-center items-center mx-auto'>
            <Lottie animationData={spinner} loop={true} />
        </div>
    );
};

export default Spinner;