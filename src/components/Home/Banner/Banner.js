import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=" banner-style d-flex d-flex justify-content-start  align-items-center">
            <div className="container text-start ">
                <h2>TOTAL HEALTH CARE SOLUTION</h2>
                <p>Get an Expert Medical Opinion from one of our world-renowned specialists so <br /> you can have the answers and confidence to make informed decisions about your health.</p>

                <div >
                    <button className="banner-btn me-4">READ MORE</button>
                    <button className="banner-btn">PURCHASH</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;