import React from 'react';
import { FaChildReaching } from 'react-icons/fa6';
import { GiMedicines, GiSyringe, GiToothbrush } from "react-icons/gi";
import { LuCircleFadingPlus } from 'react-icons/lu';
import { TbDental } from 'react-icons/tb';

const SpecialServices = () => {
    const shadow = { boxShadow: '0px 8px 24px #D7EAFE' }

    const cardClass = 'cursor-pointer flex flex-col place-items-center gap-2 py-8 transition-all duration-300 hover:border hover:border-[#0e6efd] hover:rounded-md hover:shadow-lg hover:shadow-[#d7eafe]/60 hover:scale-[1.02]';

    const iconWrapper = 'bg-[#D7EAFE] w-fit rounded-full ';

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-24'>
            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <GiMedicines className='p-4 text-[80px] text-[#0e6efd] ' />
                </div>
                <h4 className='text-xl font-medium'>Our Medicine dept</h4>
                <p className='text-[#56a2bf] underline'>Find Service</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <GiSyringe className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <h4 className='text-xl font-medium'>Center Treatment</h4>
                <p className='text-[#56a2bf] underline'>Find Service</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <LuCircleFadingPlus className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <h4 className='text-xl font-medium'>Modern Equipment</h4>
                <p className='text-[#56a2bf] underline'>Find Service</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <TbDental className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <h4 className='text-xl font-medium'>Dental Implants</h4>
                <p className='text-[#56a2bf] underline'>Find Service</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <GiToothbrush className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <h4 className='text-xl font-medium'>Root Canal Treatment</h4>
                <p className='text-[#56a2bf] underline'>Find Service</p>
            </div>

            <div style={shadow} className={cardClass}>
                <div className={iconWrapper}>
                    <FaChildReaching className='p-4 text-[80px] text-[#0e6efd]' />
                </div>
                <h4 className='text-xl font-medium'>Pediatric Dentistry</h4>
                <p className='text-[#56a2bf] underline'>Find Service</p>
            </div>
        </div>
    );
};

export default SpecialServices;
