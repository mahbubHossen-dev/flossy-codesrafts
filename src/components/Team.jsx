import React from 'react';
import team1 from '../assets/team1.PNG'
import team2 from '../assets/team2.PNG'
import team3 from '../assets/team3.PNG'
const Team = () => {

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] bg-[#0e6efd] pb-12 mt-24'>

            <div className="lg:p-20">
                <div className='text-center'>
                    <h1 className='text-3xl lg:w-2/5 mx-auto text-white'>Our Dental Team is Ready to Assist You</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-10 gap-6">
                    <div className='lg:col-span-3 text-center text-white md:h-[320px]'>
                        <img src={team1} className='w-full h-80 object-cover rounded-md' alt="" />
                        <h4 className='text-xl font-medium pt-4'>
                            Dr. Ralph Edwards
                        </h4>
                        <p>Dental Surgeon</p>
                    </div>
                    <div className='lg:col-span-4 text-center text-white md:h-[400px]'>
                        <img src={team2} className='w-full md:h-80 lg:h-96 object-cover rounded-md' alt="" />
                        <h4 className='text-xl font-medium pt-4'>
                            Dr. Ralph Edwards
                        </h4>
                        <p>Dental Surgeon</p>
                    </div>
                    <div className='lg:col-span-3 text-center text-white md:h-[320px]'>
                        <img src={team3} className='w-full h-80 object-cover rounded-md' alt="" />
                        <h4 className='text-xl font-medium pt-4'>
                            Dr. Ralph Edwards
                        </h4>
                        <p>Dental Surgeon</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Team;