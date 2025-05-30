import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div class="flex flex-col justify-center items-center my-12">
            <h1 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h1>
            <p className='text-xs md:text-base text-gray-600 text-center font-thin'>{subtitle}</p>
        </div>
    );
};

export default Heading;