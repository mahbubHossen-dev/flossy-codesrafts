import React, { useState } from 'react';
// import { TabsContent  } from "@/components/ui/tabs";
const MapForm = () => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        
        // console.log(formData)
        formData.append("access_key", "ff8eb5c1-4d27-4386-9588-4f18f26293aa");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='grid md:grid-cols-2 gap-8 mt-24'>
            <div>
                <div value="map">
                    <div className="w-full">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2419049097!2d90.39106047533559!3d23.738751578678283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c001d799a3%3A0x1fc742cf3feaf104!2sPG%20Hospital%2C%20Shahbagh%20Rd%2C%20Dhaka%201000!5e0!3m2!1sen!2sbd!4v1750842342392!5m2!1sen!2sbd"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='w-full h-full min-h-[400px] rounded-md'></iframe>
                    </div>
                </div>
            </div>
            <div className='bg-[#52A9FE] rounded-md p-8'>
                <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                    <div className='grid grid-cols-2 gap-6  mb-8'>
                        <input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white outline-none' />
                        <input type="email" name='email' placeholder='Enter your email' required className='flex-1 p-3 border-[0.5px] border-gray-400 rounded-md bg-white outline-none' />
                    </div>
                    <textarea rows='6' name='message' placeholder='Enter your message' required className='w-full p-4 border-[0.5px] border-gray-400 rounded-md bg-white outline-none mb-6'></textarea>

                    <div className='text-center'>
                        <button className='cursor-pointer bg-[#0e6efd] py-2 px-4 text-white font-medium rounded-md'>Submit</button>
                    </div>
                </form>
               {
                result && <p className='mt-4 text-lg'>{result}</p>
               }
            </div>
             
        </div>
    );
};

export default MapForm;