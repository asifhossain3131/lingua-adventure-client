import { Breadcrumbs } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Instructors = () => {
    const[instructors,setInstructors]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_SERVER_URL}/instructors`)
        .then(res=>{
            setInstructors(res.data)
        })
    },[])
    return (
        <div>
                 <div className='bg-purple-500 bg-opacity-50 flex p-3 items-center justify-between'>
              <Breadcrumbs>
      <Link to='/' className="opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      <a href="#" className="opacity-70">
        <span>Instructors</span>
      </a>
    </Breadcrumbs>
    <h1 className='text-xl font-semibold text-gray-800'>Find Your Instructor</h1>
        </div>
        </div>
    );
};

export default Instructors;