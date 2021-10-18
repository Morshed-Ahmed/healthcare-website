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
                    <p>Proin Gravida Nibh Vel Velit Auctor Aliquet. Aenean Sollicitudin, Aks Lorem Quis Bibendum Auctor, Nisi El Ipsum, Nec Sagittis Sem Nibh Id Elit. Dui Duis Sed Odiit Consequat Ipsum, Nec Sagittis Sem Nibh Id Elit. Duis Sed Odio Sit Amet Nibh Vulputate..</p>

                    <h2 className="my-5">OUR MISSION</h2>
                    <p>Proin Gravida Nibh Vel Velit Auctor Aliquet. Aenean Sollicitudin, Aks Lorem Quis Bibendum Auctoruis Sed Odio Sit Amet Nibh Vulputate..</p>
                    <br />
                    <p>Aenean Sollicitudin, Lorem Quis Bibendum Auctor, Nisi Elit Consequat Ipsum Ipsum, Nec Sagittis Sem Nibh Id Elit. Dui Duis Sed Odi Consequat Ipsum, Nec Sagittis Sem Nibh Id Elit. Dui Duis Sed Odio Sit.</p>
                </div>
            </div>
        </div>
    );
};

export default About;