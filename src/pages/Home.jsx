
import AboutUs from '@/components/AboutUs';
import Achieve from '@/components/Achieve';
import Banner from '@/components/Banner';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import Faq from '@/components/Faq';
import SpecialServices from '@/components/SpecialServices';
import StatsSection from '@/components/StatsSection';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            {/* <StatsSection /> */}
            {/* <Appointment /> */}
            <SpecialServices />
            {/* <ComprehensiveService/> */}
            <BeforeAfterGallery />
            <Team />
            <Achieve />
            <Testimonial />
            <Faq />
            {/* <ClinicLocations /> */}
        </div>
    );
};

export default Home;