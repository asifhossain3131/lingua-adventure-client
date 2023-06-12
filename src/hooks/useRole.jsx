import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useTokenSecure from './useTokenSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user, loading}=useContext(AuthContext)
     const[tokenSecure]=useTokenSecure()
     const{data: role, isLoading:isRoleLoading}=useQuery({
        queryKey:['role', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const result=await tokenSecure.get(`/users/role/${user?.email}`)
            return result.data.role
        }
     })
     return[role,isRoleLoading]
};

export default useRole;