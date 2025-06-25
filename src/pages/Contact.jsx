import ContactNumber from '@/components/ContactNumber';
import MapForm from '@/components/MapForm';
import React from 'react';

const Contact = () => {
    return (
        <div className='pt-28 w-full px-5 lg:px-8 xl:px-[8%]'>
            <div>
                <h4 className='text-center mb-2 text-lg font-Ovo dark:text-white/80'>Connect With Me</h4>
                <h2 className='text-center text-5xl font-Ovo dark:text-white/80 border-b-2 w-fit mx-auto border-[#0e6efd]'>Get in touch</h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white/80'>I'd love to here from you! If you have any question, comments or feedback please use the form below.</p>
            </div>

            <ContactNumber />
            <MapForm />
        </div>
    );
};

export default Contact;