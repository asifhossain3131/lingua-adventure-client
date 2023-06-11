import React from 'react';
import confused from '../../../public/43391-404-error-page-not-found-confused-robot.json'
import Lottie from "lottie-react";
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const ErrorPage = () => {
    const errorMessage=useRouteError()
    const navigate=useNavigate()
    return (
        <div>
             <div className='w-[350px] lg:w-[400px] flex flex-col space-y-3 justify-center items-center mx-auto'>
            <Lottie animationData={confused} loop={true} />
            <h1 className='text-red-600 font-semibold '>{errorMessage.error.message}</h1>
            <Button onClick={()=>navigate(-1)} color='green' size="sm">Go Back</Button>
        </div>
        </div>
    );
};

export default ErrorPage;