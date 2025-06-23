import React from 'react';
import Navbar from '../shared/Navbar';
import Banner from '../components/Banner';
import Appointment from '../components/Appointment';
import SpecialServices from '../components/SpecialServices';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Appointment />
            <SpecialServices />
        </div>
    );
};

export default MainLayout;