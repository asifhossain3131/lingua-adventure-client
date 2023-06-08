import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import PopularClassCard from '../../../../components/cards/PopularClassCard';



const PopularClasses = () => {
  const [classes,setClasses]=useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_SERVER_URL}/classes`)
    .then(res=>res.json())
    .then(data=>{
        setClasses(data)
    })
  },[])
    return (
        <div>
            <SectionsTitle
            header={'popular classes'}
            title={'liked by'}
            subtitle={'students'}
            ></SectionsTitle>

             
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-center"
      >
        {
          classes?.map(item=>
            <SwiperSlide
            key={item._id}
            >
           <PopularClassCard item={item}></PopularClassCard>
              </SwiperSlide>
            )
        }
      
      </Swiper>
        </div>
    );
};

export default PopularClasses;