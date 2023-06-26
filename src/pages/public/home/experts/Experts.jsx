import React from 'react';
import ReactPlayer from 'react-player';

const Experts = () => {
    return (
        <div>
              <h1 className='font-semibold text-3xl text-center'>What our experts say</h1>
            <div className='flex flex-col gap-4 lg:flex-row lg:justify-evenly mx-12'>
           <ReactPlayer width={350} url='https://www.youtube.com/watch?v=o_XVt5rdpFY' />
            <div>
                <h1>jljljljlj</h1>
            </div>
            </div>
        </div>
    );
};

export default Experts;