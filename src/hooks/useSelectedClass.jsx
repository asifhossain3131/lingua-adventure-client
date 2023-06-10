import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useTokenSecure from './useTokenSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {
    const{user,loading}=useContext(AuthContext)
     const[tokenSecure]=useTokenSecure()
     const{data:selectedClasses=[],refetch}=useQuery({
        queryKey:['cartClass',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res=await tokenSecure.get(`${import.meta.env.VITE_SERVER_URL}/cartClass?email=${user?.email}`)
            return res?.data?.classInfo
        }
     })
     return[selectedClasses,refetch]
};

export default useSelectedClass;