import React, { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { AuthContext } from '../../providers/AuthProvider';
import useTokenSecure from '../../hooks/useTokenSecure';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const SingleClassCard = ({courseClass}) => {
    const{classname,duration,enrolledStudents,image,instructorName,languageCategory,price,totalSeats}=courseClass
    const{user}=useContext(AuthContext)
    const[tokenSecure]=useTokenSecure()
    const navigate=useNavigate()


    const handleAddClass=(courseClass)=>{
      if(user && user.email){
        tokenSecure.post(`/cartClass?email=${user?.email}&price=${courseClass?.price}&courseName=${classname}`,user?.email)
        .then(res=>{
         if(res.data.error===true){
          toast.error('Already added to the list')
         }
         else{
          toast.success('Successfully added to the list')
          Swal.fire({
            title: 'Secure your place now!',
            text: "Otherwise you may miss the seat!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Pay Now'
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/')
            }
          })
         }
        })
      }
    }
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
          
            <Button onClick={()=>handleAddClass(courseClass)} disabled={totalSeats===enrolledStudents} variant="text" className="flex items-center gap-2">
              Select Class 
            </Button>
            {totalSeats===enrolledStudents && <span>No Space For this Class Now!</span>}
        </CardBody>
      </Card>
    );
};

export default SingleClassCard;