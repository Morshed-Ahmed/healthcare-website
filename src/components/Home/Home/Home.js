import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Provide from '../Provide/Provide';
import Services from '../Services/Services';
import Icon from './Icon/Icon';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
            <Provide></Provide>
            <Icon></Icon>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;