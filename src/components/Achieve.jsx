import React, { useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import achieveImage from '../assets/achieve.PNG'

const Achieve = () => {
    useEffect(() => {
        AOS.init({
            duration:1500,
            once: false,
        });
    }, []);
    const listStyle = 'flex place-items-center gap-1'

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid md:grid-cols-2 mt-24'>

            <div data-aos="zoom-in">
                <img src={achieveImage} alt="" />
            </div>

            <div data-aos="flip-left" className='space-y-6 pt-8'>
                <h1 className='text-4xl font-bold w-2/3'>
                    Achieve a Confident Smile With Us
                </h1>
                <p className='text-gray-600 text-[15px]'>
                    At Smile Bright, we're dedicated to helping you achieve a healthy, radiant smile. Our skilled team provides personalized, gentle care using the latest technology in a welcoming environment. Your smile is our priority. Trust us to care for your dental health.
                </p>
                <div>
                    <ul className='text-gray-600 '>
                        <li className={listStyle}>
                            <FaCheckCircle className='text-[#10C0FA]' />Experienced and Caring Team of Professionals</li>
                        <li className={listStyle}>
                            <FaCheckCircle className='text-[#10C0FA]' />Advanced Technology for Optimal Care Solutions</li>
                        <li className={listStyle}>
                            <FaCheckCircle className='text-[#10C0FA]' />A Wide Range of Services to Meet All Your Needs</li>
                        <li className={listStyle}>
                            <FaCheckCircle className='text-[#10C0FA]' />Personalized Care Approaches for Each Patient</li>
                    </ul>
                </div>
                <button className='bg-[#0e6efd] py-2 px-4 text-white font-medium rounded-md'>Learn More</button>
            </div>
        </div>
    );
};

export default Achieve;