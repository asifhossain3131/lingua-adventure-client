import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import Lottie from "lottie-react";
  import signInLottie from '../../../../public/124956-login.json'
  import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const{signIn}=useContext(AuthContext)
    const [showPass,setShowPass]=useState(false)
     const [success,setSuccess]=useState('')
     const[error,setError]=useState('')
     const navigate=useNavigate()
     const location=useLocation()
     const target=location?.state?.from?.pathname || '/'

    const handleLogin=data=>{
       const{email,password}=data
        signIn(email,password)
        .then(res=>{
          reset()
          toast.success('Login successful')
          navigate(target, {replace:true})
        })
        .catch(err=>{
          setError('User not found!')
        })
    }
    return (
        <div className="my-20 w-9/12 flex flex-col lg:flex-row mx-auto gap-12">
         <div className="w-[400px]">
         <Lottie animationData={signInLottie} loop={true} />
         </div>

             <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Login
        </Typography>
      </CardHeader>
        <form onSubmit={handleSubmit(handleLogin)}>
        <CardBody className="flex flex-col gap-4">
        <Input type="email" label="Email" size="lg" {...register("email", { required: true})} />
        {errors.email && <span className="text-red-600">This field is required</span>}
        <Input type={showPass? 'text':'password'} label="Password" size="lg" icon={showPass? <EyeIcon onClick={()=>setShowPass(!showPass)}  className="cursor-pointer"></EyeIcon> : <EyeSlashIcon onClick={()=>setShowPass(!showPass)}  className="cursor-pointer"></EyeSlashIcon>} {...register("password", { required: true})}/>
        {errors.password && <span className="text-red-600">This field is required</span>}
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
         <p className="text-red-500">{error}</p>
         <p className="text-green-500">{success}</p>
        </div>
        <Button type="submit" value='submit' variant="gradient" fullWidth>
          Login
        </Button>
        </CardBody>
        </form>
      <CardFooter className="pt-0">
        <Typography variant="small" className="mt-6 flex justify-center">
          Don't have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
           <Link to='/register'> Create an account</Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
        </div>
    );
};

export default Login;