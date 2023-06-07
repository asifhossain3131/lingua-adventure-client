import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext=createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const gitProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {
    // hooks
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    // authentications functionalities
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const profileUpdate=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

const gitLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,gitProvider)
}


    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if(currentUser){
                const loggedUser={email:currentUser?.email}
                axios.post(`${import.meta.env.VITE_SERVER_URL}/jwt`,loggedUser)
                .then(res=>{
                 localStorage.setItem('access-token',res.data.token)
                 setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
         
        })
        return ()=>unsubscribe()
    },[])

    // context values 
    const authInfo={
user,
loading,
createUser,
profileUpdate,
signIn,
googleLogin,
gitLogin,
logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;