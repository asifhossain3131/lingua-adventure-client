import React, { useEffect, useState } from 'react';
import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import CheckOutForm from '../../../../components/checkout form/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);
const UserPayment = () => {
const {courseName}=useParams()
const [course,setCourse]=useState({})
useEffect(()=>{
     axios.get(`${import.meta.env.VITE_SERVER_URL}/classes/${courseName}`)
     .then(res=>setCourse(res?.data))
},[courseName])
    return (
        <div>
            <SectionsTitle header={'payment checkout'} title={'time to book'} subtitle={'your place'}></SectionsTitle>
            <h1 className='font-semibold text-xl text-center'>Your Current Payment: {course?.price} for {courseName}</h1>
           <div className='w-9/12 mx-auto mt-12'>
           <Elements stripe={stripePromise}>
            <CheckOutForm course={course}></CheckOutForm>
            </Elements>
           </div>
        </div>
    );
};

export default UserPayment;