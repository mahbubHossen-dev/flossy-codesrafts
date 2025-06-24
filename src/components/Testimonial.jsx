import React from 'react';
import { testimonialData } from '../data/testimonialData';

const Testimonial = () => {

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid md:grid-cols-2 lg:grid-cols-3 mt-24 gap-5'>
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
    );
};

export default Testimonial;