import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import SectionsTitle from "../../../../components/section titles/SectionsTitle";


const Gallery = () => {
    const [open, setOpen] = React.useState(false);
    const [currentPhoto,setCurrentPhoto] = React.useState(null);
    const handleModal=img=>{
        setOpen((cur) => !cur);
        setCurrentPhoto(img)
    }
    const images=[
        {
            id:1,
            imgSrc:'https://img.freepik.com/free-photo/medium-shot-smiley-girl-with-headphones-laptop_23-2148389065.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'
        },
        {
            id:2,
            imgSrc:'https://img.freepik.com/free-photo/young-english-teacher-doing-her-class-online_23-2149019781.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'
        },
        {
            id:3,
            imgSrc:'https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178645.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'
        },
        {
            id:4,
            imgSrc:'https://img.freepik.com/free-photo/medium-shot-smiley-woman-teaching_23-2149272226.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'
        },
        {
            id:5,
            imgSrc:'https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'
        },
        {
            id:6,
            imgSrc:'https://img.freepik.com/free-photo/proud-teacher-with-her-elementary-students_1098-2857.jpg?size=626&ext=jpg&ga=GA1.1.663062170.1681230249&semt=ais'
        },
    ]
    return (
    <>
       <SectionsTitle header={'gallery'} title={'our environments'}></SectionsTitle>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12 '>
            {
                images.map(({id,imgSrc})=>

                <React.Fragment key={id}>
      <Card
        className="h-64  w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={()=>handleModal(imgSrc)}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src={imgSrc}
        />
      </Card>
      <Dialog size="xl" open={open} handler={handleModal}>
        <DialogBody divider={true} className="p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full object-cover object-center"
            src={currentPhoto}
          />
        </DialogBody>
      </Dialog>
    </React.Fragment>
               
                )
            }
        </div>
    </>
    );
};

export default Gallery;