import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useTokenSecure from './useTokenSecure';
import { useQuery } from '@tanstack/react-query';

const useEnrolledClasses = () => {
 const{user,loading}=useContext(AuthContext)
 const[tokenSecure]=useTokenSecure()
 const{data:enrolledClasses=[],refetch}=useQuery({
    queryKey:[`enrolledClasses`, user?.email],
    enabled:!loading,
    queryFn:async()=>{
    const result= await tokenSecure.get(`/enrolledClasses/${user?.email}`)
     return result?.data?.enrolledClasses
    }
 })
 return [enrolledClasses,refetch]
};

export default useEnrolledClasses;