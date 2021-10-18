import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-style ">
            <div className="container">
                <div className="row text-white pt-5 ">
                    <div className="col-md-6 col-lg-3 my-4 footer-logo">
                        <img className="mb-4 img-fluid" src={'http://webstrot.com/html/deepmind/deepmind/images/index_2_logo.png'} alt="" />
                        <p className="my-4">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                        <div className="mt-5">
                            <h6>Address : -512/fonia,canada</h6>
                            <h6>Call us : +61 5001444-122</h6>
                            <h6>Email : dummy@example.com</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h4 className="my-4">INSTAGRAM</h4>
                        <div className="row ">
                            <div className="col-4 ">
                                <img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/footer_1.jpg'} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/footer_2.jpg'} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/footer_3.jpg'} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/footer_4.jpg'} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/footer_5.jpg'} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/footer_6.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h4 className="ms-4 my-4">USERFUL</h4>
                        <ul className="footer-list">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Service</li>
                            <li>Doctors</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h4 className="my-4 ">OPENING HOURS</h4>
                        <p className="pt-4">Monday – Friday ------09:00-17:00</p>
                        <p>Saturday -----------------09:30-17:00</p>
                        <p>Sunday -------------------10:30-18:00</p>
                    </div>
                </div>
                <hr />
                <p className="text-white">Copyright © 2020- DEEPMINDDesign by Webstrot.</p>
            </div>
        </div>
    );
};

export default Footer;