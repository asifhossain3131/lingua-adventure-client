import React, { useContext } from 'react';
import useRole from '../hooks/useRole';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/page background/Spinner';

const AdminRoute = ({children}) => {
    const[role,isRoleLoading]=useRole()
    const{user}=useContext(AuthContext)
    const location=useLocation()

    if( isRoleLoading){
        return <Spinner></Spinner>
    }

    if(user && role==='admin'){
        return children
    }
    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;