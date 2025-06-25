import React from 'react';
import { FaChildReaching, FaLocationDot } from 'react-icons/fa6';
import { GiMedicines, GiSyringe, GiToothbrush } from 'react-icons/gi';
import { LuCircleFadingPlus } from 'react-icons/lu';
import { TbDental } from 'react-icons/tb';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBlenderPhone } from "react-icons/fa";
const ContactNumber = () => {
    const shadow = { boxShadow: '0px 8px 24px #D7EAFE' }

    const cardClass = 'cursor-pointer flex flex-col place-items-center gap-2 py-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#d7eafe]/60 hover:scale-[1.02]';

    const iconWrapper = 'bg-[#D7EAFE] w-fit rounded-full ';

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-24'>
            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <FaLocationDot className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <p className='text-center text-gray-600'>Bangladesh Medical University (BMU) Shahbag, Dhaka-1000.</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <MdMarkEmailUnread className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <p className='text-gray-600'>bridesmile@gmail.com</p>
                <p className='text-gray-600'>mahbubhossen172@gmail.com</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <FaBlenderPhone className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <p className='text-gray-600'>+208-666-01112</p>
                <p className='text-gray-600'>+380961381877</p>
            </div>
        </div>
    );
};

export default ContactNumber;