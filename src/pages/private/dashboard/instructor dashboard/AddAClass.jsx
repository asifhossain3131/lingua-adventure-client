import React, { useContext } from "react";
import SectionsTitle from "../../../../components/section titles/SectionsTitle";
import { useForm } from "react-hook-form";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { data } from "autoprefixer";
import useTokenSecure from "../../../../hooks/useTokenSecure";
import Swal from "sweetalert2";

const imageKey=import.meta.env.VITE_imgbb_secret
const AddAClass = () => {
    const{user}=useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const[tokenSecure]=useTokenSecure()
    const hostingUrl=`https://api.imgbb.com/1/upload?key=${imageKey}`

    const handleAddClass=data=>{
        const formData=new FormData()
        formData.append('image', data.image[0])
       
        fetch(hostingUrl,{
          method:'POST',
          body:formData
        })
        .then(res=>res.json())
        .then(imgRes=>{
          if(imgRes.success){
            const imgUrl=imgRes.data.display_url
            const {classname,price,totalSeats,overview,duration,languageCategory }=data
            const courseCurriculums = [
                "Introduction to the Language",
                "Grammar and Sentence Structure",
                "Building Vocabulary",
                "Reading and Writing",
                "Cultural Insights"
              ];
              const priceInt=parseInt(price)
              const seatInt=parseInt(totalSeats)
            const finalClass={classname,price:priceInt,totalSeats:seatInt,overview,languageCategory, image:imgUrl, enrolledStudents:0,courseCurriculums,instructorName:user?.displayName,email:user?.email,status:'pending',duration}
            tokenSecure.post('/classes',finalClass)
            .then(data=>{
              if(data.data.insertedId){
                reset()
                Swal.fire({
                  icon: 'success',
                  title: 'New Class has been saved',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
          }
        })    
    }
  return (
    <div>
      <SectionsTitle
        header={"add a class"}
        title={"a mentor can bring out"}
        subtitle={"the best of a student"}
      ></SectionsTitle>

      <Card className="w-9/12 mx-auto" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add New Class
        </Typography>
        <form onSubmit={handleSubmit(handleAddClass)} className="mt-8 mb-2 ">
          <div className="mb-4 flex flex-col gap-6">
           <div className="flex gap-3">
           <Input  disabled size="lg" defaultValue={user?.displayName} />
            <Input  disabled size="lg" defaultValue={user?.email}/>
           </div>
           <div className="flex gap-3">
           <Input {...register("classname")} type="text" size="lg" label="Class Name" />
            <Input {...register("image")} type="file" size="lg" label="Photo" />
           </div>
           <div className="flex gap-3">
           <Input {...register("totalSeats")} type="number" size="lg" label="Total Seats" />
            <Input {...register("price")} type="number" size="lg" label="Price" />
           </div>
           <div className="flex gap-3">
           <Input {...register("duration")} type="text" size="lg" label="Duration" />
           <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Category</span>
            </label>
            <select defaultValue={'pick one'} {...register("languageCategory", { required: true })} className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option></option>
              <option>English</option>
              <option>Arabic</option>
              <option>French</option>
              <option>German</option>
              <option>Japanese</option>
              <option>Spanish</option>
            </select>
          </div>
           </div>
           <div className="w-full">
      <Textarea {...register("overview")} label="Overview" />
    </div>
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Add Class
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddAClass;
