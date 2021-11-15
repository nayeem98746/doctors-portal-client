import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testmonilas from '../Testmonials/Testmonilas';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>
           <Testmonilas></Testmonilas>
        </div>
    );
};

export default Home;