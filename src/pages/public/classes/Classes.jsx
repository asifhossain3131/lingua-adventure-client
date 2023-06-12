import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import ClassesCard from '../../../components/cards/ClassesCard';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const Classes = () => {
    const [classes,setClasses]=useState([])
    const{totalCounts}=useLoaderData()
    const[currentPage,setCurrentPage]=useState(0)
    const totalPages=Math.ceil(totalCounts/6)
    const pageNumbers=[...Array(totalPages).keys()]

    const [active, setActive] = React.useState(1);
    const getItemProps = (index) =>
      ({
        variant: active === index ? "filled" : "text",
        color: active === index ? "blue" : "blue-gray",
        onClick: () => setActive(index),
        className: "rounded-full",
      });
    const next = () => {
      if (active === pageNumbers.length) return;
   
      setActive(active + 1);
    };
   
    const prev = () => {
      if (active === 1) return;
   
      setActive(active - 1);
    };
   

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/classes?page=${currentPage}&limit=${6}&sort=${0}`)
            setClasses(response.data);
        }
        fetchData();
    }, [currentPage]);
    return (
  <div className='mb-20'>
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
        <span>Classes</span>
      </a>
    </Breadcrumbs>
    <h1 className='text-xl font-semibold text-gray-800'>Find Your Classes</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12 mt-12'>
            {
                classes?.map(item=><ClassesCard item={item}></ClassesCard>)
            }
        </div>

        <div className="flex items-center gap-4 mt-8">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {
            pageNumbers.map((pageNumber,i)=>
                <IconButton onClick={()=>setCurrentPage(pageNumber)} key={pageNumber} {...getItemProps(pageNumber+1)}>{pageNumber+1}</IconButton>
                )
        }
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  </div>
    );
};

export default Classes;