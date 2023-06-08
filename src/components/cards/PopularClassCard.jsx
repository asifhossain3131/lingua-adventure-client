import React from 'react';
import { Typography } from "@material-tailwind/react";
const PopularClassCard = ({item}) => {
    return (
        <div className='overflow-hidden  relative transition duration-200 transform hover:-translate-y-8 rounded shadow-lg hover:shadow-2xl'>
                <figure>
      <img
        className="h-[250px] w-full rounded-lg"
        src={item?.image}
        alt="nature image"
      />
      <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
       {item?.classname}
      </Typography>
    </figure>

    <div className='px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold'>{item?.className}</h1>gg
      </div>
        </div>
    );
};

export default PopularClassCard;

{/* <Link to={`/shop/shop/itemFood/${item.item}`}>
<div className='overflow-hidden  relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
      <img
        src={item?.image}
        alt='gallery'
        className='object-cover w-full h-48 '
      />

      <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold'>{item?.className}</h1>
      </div>
    </div>
</Link> */}