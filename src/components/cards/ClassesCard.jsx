import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const ClassesCard = ({item}) => {
    const{image,classname,price, instructorName,enrolledStudents,totalSeats, _id}=item
    return (
        <Card className="w-88">
        <CardHeader shadow={false} floated={false} className="h-64">
          <img 
            src={image}
            className="w-full h-full object-cover hover:bg-black"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {classname}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${price}
            </Typography>
          </div>
          <Typography variant="small" color="gray" className="font-normal opacity-75">
            <p>Instructor: {instructorName}</p>
            <p>Seat Available: {totalSeats-enrolledStudents}</p>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
       <Link to={`/singleClass/${classname}`}>
       <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            View Class
          </Button>
       </Link>
        </CardFooter>
      </Card>
    );
};

export default ClassesCard;