import React from 'react';
import { testimonialData } from '../data/testimonialData';
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
const Testimonial = () => {

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid grid-cols-12 mt-24 gap-6 '>
            <div className='col-span-4 flex flex-col justify-center space-y-3'>
                <h1 className='text-4xl font-bold'>
                    What Patient are saying
                </h1>
                <p>here are some recent wonderful comments we have receive from our patients.</p>
                <div className='bg-[#0e6efd] p-6 rounded-md flex gap-3 w-fit text-white'>
                    <FaStar className='text-5xl' />
                    <div>
                        <h2 className='text-4xl'>4.9</h2>
                        <p>Average rating</p>
                    </div>
                </div>
            </div>
            <div className='col-span-8 grid grid-cols-2 gap-6'>
                {
                    testimonialData.map(data => (
                        <div key={data.id} className="bg-[#F0F7FF] p-6 rounded-xl shadow-md">
                            <p className="text-gray-700 italic mb-4">{data.message}</p>
                            <div className="flex items-center gap-4">
                                <img src={data.photo} alt={data.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h4 className="text-md font-semibold">{data.name}</h4>
                                    <p className="text-sm text-gray-500">{data.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonial;