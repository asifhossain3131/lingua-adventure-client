import { Button, Card, Input, Textarea, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const UpdateClass = () => {
    const { register, handleSubmit, reset} = useForm();
    const classInfo=useLoaderData()
    const{user}=useContext(AuthContext)
    const{classname,duration,image,instructorName,languageCategory,overview,price,totalSeats}=classInfo

    const handleUpdateClass=data=>{
        
    }
    return (
        <div>
             <Card className="w-9/12 mx-auto" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Update Class
        </Typography>
        <form onSubmit={handleSubmit(handleUpdateClass)} className="mt-8 mb-2 ">
          <div className="mb-4 flex flex-col gap-6">
           <div className="flex gap-3">
           <Input  disabled size="lg" defaultValue={user?.displayName} />
            <Input  disabled size="lg" defaultValue={user?.email}/>
           </div>
           <div className="flex gap-3">
           <Input defaultValue={classname} {...register("classname")} type="text" size="lg" label="Class Name" />
            <Input disabled {...register("image")} type="file" size="lg" label="Photo" />
           </div>
           <div className="flex gap-3">
           <Input disabled defaultValue={totalSeats} {...register("totalSeats")} type="number" size="lg" label="Total Seats" />
            <Input defaultValue={price} {...register("price")} type="number" size="lg" label="Price" />
           </div>
           <div className="flex gap-3">
           <Input defaultValue={duration} {...register("duration")} type="text" size="lg" label="Duration" />
           <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose Category</span>
            </label>
            <select disabled defaultValue={languageCategory} {...register("languageCategory", { required: true })} className="select select-bordered">
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
      <Textarea defaultValue={overview} {...register("overview")} label="Overview" />
    </div>
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            Update Class
          </Button>
        </form>
      </Card>
        </div>
    );
};

export default UpdateClass;