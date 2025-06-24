
import Navbar from '../shared/Navbar';
import Banner from '../components/Banner';
import Appointment from '../components/Appointment';
import SpecialServices from '../components/SpecialServices';
import ComprehensiveService from '../components/ComprehensiveService';
import AboutDoctor from '../components/AboutUs';
import Testimonial from '../components/Testimonial';
import ClinicLocations from '../components/ClinicLocations';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import Team from '../components/Team';
import Faq from '@/components/Faq';
import Achieve from '@/components/Achieve';
import Footer from '@/shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;