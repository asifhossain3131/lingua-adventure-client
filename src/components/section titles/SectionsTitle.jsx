import React from 'react';

const SectionsTitle = ({header, title}) => {
    return (
        <div className='text-center my-12 lg:w-1/2  mx-auto'>
        <p className='text-yellow-700 mb-4 uppercase'>{header}</p>
        <p className='uppercase text-xl lg:text-3xl text-semibold w-3/4 text-blue-800  mx-auto border-t-4 border-y-gray-600 p-2'>{title}</p>
    </div>
    );
};

export default SectionsTitle;