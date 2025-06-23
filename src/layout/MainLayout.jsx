
import Navbar from '../shared/Navbar';
import Banner from '../components/Banner';
import Appointment from '../components/Appointment';
import SpecialServices from '../components/SpecialServices';
import ComprehensiveService from '../components/ComprehensiveService';
import AboutDoctor from '../components/AboutDoctor';
import Testimonial from '../components/Testimonial';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutDoctor />
            {/* <Appointment /> */}
            {/* <SpecialServices /> */}
            {/* <ComprehensiveService/> */}
            <Testimonial />
        </div>
    );
};

export default MainLayout;