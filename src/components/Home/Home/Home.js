import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Enquiry from '../Enquiry/Enquiry';
import Provide from '../Provide/Provide';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
            <Provide></Provide>
            <Enquiry></Enquiry>

        </div>
    );
};

export default Home;