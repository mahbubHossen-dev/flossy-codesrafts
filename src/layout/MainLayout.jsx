
import Navbar from '../shared/Navbar';
import Banner from '../components/Banner';
import Appointment from '../components/Appointment';
import SpecialServices from '../components/SpecialServices';
import ComprehensiveService from '../components/ComprehensiveService';
import AboutDoctor from '../components/AboutDoctor';
import Testimonial from '../components/Testimonial';
import ClinicLocations from '../components/ClinicLocations';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import Team from '../components/Team';
import Faq from '@/components/Faq';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutDoctor />
            {/* <Appointment /> */}
            <SpecialServices />
            {/* <ComprehensiveService/> */}
            <BeforeAfterGallery />
            <Team />
            <Testimonial />
            <Faq />
            <ClinicLocations />
        </div>
    );
};

export default MainLayout;