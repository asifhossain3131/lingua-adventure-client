import { Breadcrumbs } from '@material-tailwind/react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleClassCard from '../../../components/cards/SingleClassCard';
import SingleClassTab from '../../../components/tabs/SingleClassTab';

const SingleClass = () => {
    const courseClass=useLoaderData()
    return (
        <div className='mb-20'>
                  <div className='bg-purple-500 bg-opacity-50 flex p-3 items-center justify-between'>
                  <Breadcrumbs>
      <Link to='/' className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      <Link to='/classes' className="opacity-60">
        <span>Classes</span>
      </Link>
      <a href="#">Class</a>
    </Breadcrumbs>
    <h1 className='text-xl font-semibold text-gray-800'>Enroll Your Class</h1>
        </div>

    <SingleClassCard courseClass={courseClass}></SingleClassCard>
    <SingleClassTab courseClass={courseClass}></SingleClassTab>
        </div>
    );
};

export default SingleClass;