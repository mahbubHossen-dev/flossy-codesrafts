import React from 'react';

const Team = () => {

    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] bg-[#0e6efd]'>

            <div className="p-24">
                <div className='text-center'>
                    <h1 className='text-3xl w-2/5 mx-auto text-white'>Our Dental Team is Ready to Assist You</h1>
                </div>
                <div className="grid grid-cols-10 gap-6">
                    <div className='col-span-3 text-center text-white md:h-[320px]'>
                        <img src='/src/assets/team1.PNG' className='w-full h-80 object-cover rounded-md' alt="" />
                        <h4 className='text-xl font-medium pt-4'>
                            Dr. Ralph Edwards
                        </h4>
                        <p>Dental Surgeon</p>
                    </div>
                    <div className='col-span-4 text-center text-white md:h-[400px]'>
                        <img src='/src/assets/team2.PNG' className='w-full h-96 object-cover rounded-md' alt="" />
                        <h4 className='text-xl font-medium pt-4'>
                            Dr. Ralph Edwards
                        </h4>
                        <p>Dental Surgeon</p>
                    </div>
                    <div className='col-span-3 text-center text-white md:h-[320px]'>
                        <img src='/src/assets/team1.PNG' className='w-full h-80 object-cover rounded-md' alt="" />
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