import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


const SingleClassCard = ({courseClass}) => {
    const{classname,courseCurriculums,duration,enrolledStudents,image,instructorName,introVideo,languageCategory,overview,price,totalSeats}=courseClass
    return (
        <Card className="flex-row lg:w-7/12 mx-auto mt-12 rounded-none">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img 
            src={image}
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
           {classname}
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
           <p>Language: {languageCategory}</p>
           <p>Instructor: {instructorName}</p>
           <p>Total Seats: {totalSeats}</p>
           <p>Enrolled Students: {enrolledStudents}</p>
           <p>Available Seats: {totalSeats-enrolledStudents}</p>
           <p>Durations: {duration}</p>
           <p>Price: {price}</p>
          </Typography>
          
            <Button disabled={totalSeats===enrolledStudents} variant="text" className="flex items-center gap-2">
              Select Class 
            </Button>
            {totalSeats===enrolledStudents && <span>No Space For this Class Now!</span>}
        </CardBody>
      </Card>
    );
};

export default SingleClassCard;