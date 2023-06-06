import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Radio,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import signUpLottie from '../../../../public/72342-welcome.json'
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const{createUser,profileUpdate}=useContext(AuthContext)
     const [success,setSuccess]=useState('')
     const[error,setError]=useState('')

     const handleSignUp=data=>{
        const {name,photo,gender,email,address,password,confirm,phone}=data
        setError('')
        setSuccess('')
        if(password!==confirm){
            return setError('please check your password')
        }
        createUser(email,password)
        .then(res=>{
            setSuccess('Registration has been successful')
            reset()
        profileUpdate(name,photo)
        .then(res=>{
           axios.post(import.meta.env.SERVER_URL/users, data)
        })
        .then(err=>{
            setError('Profile not updated!')
        })
        })
        .then(err=>{
            setError('Something went wrong!')
        })

     }
    return (
        <div className="my-20 w-9/12 mx-auto flex flex-col lg:flex-row gap-4">
             <div className="w-[400px]">
         <Lottie animationData={signUpLottie} loop={true} />
         </div>

            <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Create an account
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details carefully
      </Typography>
      <form onSubmit={handleSubmit(handleSignUp)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
        <Input type="text" size="lg" label="Name" {...register("name", { required: true, maxLength: 20 })}/>
        {errors.name?.type==='required' && <span className="text-red-600">Email is required</span>}
        {errors.name?.type === 'maxLength' && <span className="text-red-600">Name should not be more than 20 characters</span>}
          <div className="flex items-center gap-4" >
            <p>Gender:</p>
      <Radio id="male" type="radio" name="type" value='Male' label="Male" {...register("gender", { required: true })} defaultChecked/>
      <Radio id="female" type="radio" name="type" value='Female' label="Female"  {...register("gender", { required: true })}/>
      {errors.gender && <span className="text-red-600">Gender is required</span>}
    </div>
          <Input type='text' size="lg" label="Photo URL" {...register("photo", { required: true })}/>
          {errors.photo && <span className="text-red-600">Photo URL is required</span>}
          <Input type='tel' size="lg" label="Phone number" {...register("phone", { required: true })} />
          {errors.phone && <span className="text-red-600">Phone number is required</span>}
          <Input type='text' size="lg" label="Address" {...register("address", { required: true })}/>
          {errors.address && <span className="text-red-600">Address is required</span>}
          <Input type='email' size="lg" label="email" {...register("email", { required: true })}/>
          {errors.email && <span className="text-red-600">Email is required</span>}
          <Input type="password" size="lg" label="Password" {...register("password", {required:true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/})}/>
          <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal">
        <InformationCircleIcon className="w-4 h-4 -mt-px" />
        Use at least 6 characters, one uppercase and one special character.
      </Typography>
      {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase and one special character.</p>}
          <Input type="password" size="lg" label="Confirm Password"  {...register("confirm", { required: true })}/>
          {errors.confirm && <span className="text-red-600">Confirm password is required</span>}
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <p className="text-red-600">{error}</p>
        <p className="text-green-600">{success}</p>
        <Button type="submit" value='submit' className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to='/login'
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Login
          </Link>
        </Typography>
      </form>
    </Card>
        </div>
    );
};

export default Register;