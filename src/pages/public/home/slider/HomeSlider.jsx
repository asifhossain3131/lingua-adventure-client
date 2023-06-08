import React, { useEffect, useState } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import axios from 'axios';


const HomeSlider = () => {
    const [sliders,setSliders]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/sliders`)
        .then(res => {
         setSliders(res.data)
        })
    },[])
  
    return (
        <>
            <Carousel className="rounded-xl">
                {
                    sliders?.map(slider=>
                        <div key={slider._id} className="relative h-full w-full">
                        <img
                          src={slider?.image}
                          alt="image 2"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                              variant="h1"
                              color="white"
                              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                              {slider?.title}
                            </Typography>
                            <Typography
                              variant="lead"
                              color="white"
                              className="mb-12 opacity-80"
                            >
                             {slider?.description}
                            </Typography>
                            <div className="flex gap-2">
                              <Button size="lg" color="white">
                                Apply a course
                              </Button>
                              <Button size="lg" color="white" variant="text">
                                Learn more
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                                )
                }
     
    </Carousel>
        </>
    );
};

export default HomeSlider;