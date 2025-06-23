import aboutDoctor from '../assets/banner-doctor.png'

const AboutDoctor = () => {
    return (
        <div>
            <div className='w-full px-5 lg:px-8 xl:px-[8%] grid md:grid-cols-2 gap-10 mt-24'>
                <div className='relative'>
                    <img className='md:w-4/5' src={aboutDoctor} alt="" />
                    <div className='bg-[#56a2bf] w-fit flex text-white md:p-4 p-2 rounded-lg absolute lg:right-35 -right-5  lg:-bottom-4 bottom-15 gap-1.5'>
                        <div className=''>
                            <span className='text-5xl'>10</span>
                        </div>
                        <div>
                            <p>years of</p>
                            <p>experience</p>
                        </div>
                    </div>
                </div>
                <div className='flex place-items-center'>
                    <div className="space-y-5 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">Dr. John Doe</h2>
                    <p className="text-lg text-blue-600 font-medium">BDS, MDS (Oral & Maxillofacial Surgery)</p>

                    <p className="text-gray-600">
                        With over 10 years of experience, Dr. John Doe is committed to providing
                        advanced and personalized dental care. His expertise lies in cosmetic
                        dentistry, implants, and pediatric dental treatments.
                    </p>

                    <div>
                        <h4 className="text-gray-800 font-semibold mb-2">Specializations:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Cosmetic Dentistry</li>
                            <li>Dental Implants</li>
                            <li>Root Canal Therapy</li>
                            <li>Children's Dental Care</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDoctor;