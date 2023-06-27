import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardBody, CardHeader, Carousel, Typography } from "@material-tailwind/react";
import SectionsTitle from '../../../../components/section titles/SectionsTitle';
import axios from 'axios';



const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/reviews`)
        .then(res=>{
            setReviews(res.data)
        })
    },[])
    return (
        <div>
            <SectionsTitle
            header={'testimonials'}
            title={'happy students'}
            ></SectionsTitle>
             <Carousel transition={{ duration: 2 }} className="rounded-xl bg-yellow-800 bg-opacity-40 p-8">
            {
                reviews?.map(review=>
                    <Card color="transparent" shadow={false} className="w-1/2 mx-auto">
                    <CardHeader
                      color="transparent"
                      floated={false}
                      shadow={false}
                      // className="mx-0 flex items-center gap-4 pt-0 pb-8"
                    >
                      <Avatar
                        size="lg"
                        variant="circular"
                        src={review?.image}
                        alt="candice wu"
                      />
                      <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <Typography variant="h5" color="blue-gray">
                         {review?.name}
                          </Typography>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="mb-6 p-0">
                      <Typography>
                        {review?.comment}
                      </Typography>
                    </CardBody>
                  </Card>
                    )
            }

    </Carousel>
        </div>
    );
};

export default Testimonials;