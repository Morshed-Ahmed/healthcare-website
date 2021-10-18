import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className=" banner-style d-flex d-flex justify-content-start  align-items-center">
            <div className="container text-start ">
                <h2>TOTAL HEALTH CARE SOLUTION</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae porro <br /> molestias dolore dicta quod nulla amet obcaecati alias consectetur tempore?</p>

                <div >
                    <button className="banner-btn me-4">READ MORE</button>
                    <button className="banner-btn">PURCHASH</button>

                </div>
            </div>
        </div>
    );
};

export default Banner;