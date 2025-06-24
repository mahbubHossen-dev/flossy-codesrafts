import React from 'react';
import bannerDoctor from '../../public/assets/banner-doctor.png'
import { FiPhoneCall } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";


const Banner = () => {

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] flex flex-col-reverse md:flex-row justify-around mt-12 gap-10'>
            <div className='flex justify-center items-center'>
                <div className='space-y-2.5'>
                    <h1 className='text-4xl font-medium'>
                        Creating Beautiful Smiles <br />With <span className='text-[#0E82FD]'>Expert Care</span>
                    </h1>
                    <p className='w-3/4'>
                        At flossy we believe in creating healthy, confident smiles with experts care and advance technology
                    </p>
                    <div className='flex gap-4'>
                        <div className='bg-[#0E82FD] rounded-md text-lg text-white flex place-items-center gap-2 py-2 pl-2 pr-6'>
                            <FiPhoneCall className='p-2 bg-white text-black w-[35px] h-[35px] rounded-md' />
                            <button className=''>  Get Started</button>
                        </div>
                        <div className='border-2 border-[#0E82FD] rounded-lg text-lg text-black flex place-items-center gap-2 py-2 pl-2 pr-6'>
                            <MdMedicalServices className='p-2 bg-[#0E82FD] text-white w-[35px] h-[35px] rounded-md' />
                            <button className=''>  Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerDoctor} alt="" />
            </div>
        </div>
    );
};

export default Banner;