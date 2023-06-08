import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useTokenSecure = () => {
    const{logOut}=useContext(AuthContext)
    const navigate=useNavigate()

    const tokenSecure = axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_URL}`, 
      });
    
      useEffect(() => {
        tokenSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('access-token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        });
    
        tokenSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await logOut();
              navigate('/login');
            }
            return Promise.reject(error);
          }
        );
      }, [logOut, navigate, tokenSecure]);
    
      return [tokenSecure];
};

export default useTokenSecure;