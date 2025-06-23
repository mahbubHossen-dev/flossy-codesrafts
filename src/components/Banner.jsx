import React from 'react';
import bannerDoctor from '../assets/banner-doctor.png'
const Banner = () => {
    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] md:flex justify-around mt-12'>
            <div className='flex justify-center items-center'>
                <div className='space-y-2.5'>
                    <h1 className='text-3xl'>
                        Creating Beautiful Smiles <br />With <span>Expert Care</span>
                    </h1>
                    <p className='w-3/4'>
                        At flossy we believe in creating healthy, confident smiles with experts care and advance technology
                    </p>
                    <div>
                        <button>Get Started</button>
                        <button>Our Services</button>
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