import aboutDoctorImage from '../assets/aboutDoctor.PNG'
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";
const AboutUs = () => {
    return (
        <div>
            <div className='w-full px-5 lg:px-8 xl:px-[8%] grid md:grid-cols-2 justify-center mt-24'>
                <div className='relative'>
                    <img className='lg:w-4/5' src={aboutDoctorImage} alt="" />
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
                    <h2 className="text-3xl font-bold text-gray-800">Quick Info About Us</h2>
                    <p className="text-lg text-blue-600 font-medium">BDS, MDS (Oral & Maxillofacial Surgery)</p>

                    <p className="text-gray-600">
                        Smile Bright is dedicated to providing comprehensive care throughout your entire journey with us. Our consultation services allow you to gain insights into your treatment.
                    </p>

                    <div className='space-y-3'>
                        <div className='flex place-items-center gap-5'>
                            <div style={{ borderRadius: "5px 30px 5px 5px" }} className='bg-[#E6FAFF] p-4'>
                                <FaFileInvoiceDollar className='text-4xl text-[#0DC5FE]' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Medical Insurance</h3>
                                <p className='text-gray-600'>We'll work with your insurance company to help you get the treatment you need.</p>
                            </div>
                        </div>

                        <div className='flex place-items-center gap-5'>
                            <div style={{ borderRadius: "5px 30px 5px 5px" }} className='bg-[#E6FAFF] p-4'>
                                <FaCalendarPlus className='text-4xl text-[#0DC5FE]' />
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>Medical Insurance</h3>
                                <p className='text-gray-600'>We'll work with your insurance company to help you get the treatment you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;