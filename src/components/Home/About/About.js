import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="my-5">
            <div className="row container">
                <div className="col-md-12 col-lg-6">
                    <img className="img-fluid" src={'http://webstrot.com/html/deepmind/deepmind/images/about_us_bg.jpg'} alt="" />
                </div>
                <div className="col-md-12 col-lg-6">
                    <h2 className="my-5">ABOUT MEDICAL</h2>
                    <h5>SPECIALTY MEDICINE WITH COMPASSION AND CAR PROIN GRAVIDA NIBH VEL VELIT</h5>
                    <p>The Ministry of Public Health has launched a new website registration process that will allows citizens and residents to register their desire to receive the COVID-19 vaccine.</p>

                    <h2 className="my-5">OUR MISSION</h2>
                    <p> The new online registration form allows people who meet the requirements for priority groups to request an appointment to receive the vaccine.</p>
                    <br />
                    <p>MOPH in collaboration with HMC and PHCC has created webpage to provide residents of Qatar with a trusted source of information related to the Novel Coronavirus 2019.</p>
                </div>
            </div>
        </div>
    );
};

export default About;