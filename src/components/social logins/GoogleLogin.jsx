import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const GoogleLogin = () => {
    const{googleLogin}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()

    const target = location.state?.from?.pathname || "/"

    const googleSignIn=()=>{
        googleLogin()
        .then(res=>{
            const user=res.user
            const loggedUser={name:user.displayName, email:user.email}
            axios.post(`${import.meta.env.VITE_SERVER_URL}/users`, loggedUser)
            .then(response=>{
               navigate(target)
            })
        })
    }
    return (
        <>
              <Button
      onClick={googleSignIn}
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
      >
        <img src="https://i.ibb.co/NsqTH0Y/google-icon.png" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
        </>
    );
};

export default GoogleLogin;