import React from 'react';
import { Link } from 'react-router-dom';
import './Provide.css'
const Provide = () => {
    return (
        <div className="mt-5 provider-style">
            <div className="container py-4">
                <h2 className="my-4">WE PROVIDE TOP SERVICES</h2>
                <img className="mb-5" src={'http://webstrot.com/html/deepmind/deepmind/images/Icon_team.png'} alt="" />
                <div className="row">
                    <div className="col-4 cd-style">
                        <img className="img-fluid w-25" src={'https://s3.amazonaws.com/images.teladoc.com/www/2019/landing-pages/bdstart/1.png'} alt="" />
                        <p>Are unsure about a diagnosis or need help deciding on a treatment option</p>
                        <Link to="/">Read More </Link>
                    </div>
                    <div className="col-4 cd-style ">
                        <img className="img-fluid w-25" src={'https://s3.amazonaws.com/images.teladoc.com/www/2019/landing-pages/bdstart/2.png'} alt="" />
                        <p>Have medical questions or concerns and want a leading expert’s advice</p>
                        <Link to="/">Read More </Link>
                    </div>
                    <div className="col-4 cd-style">
                        <img className="img-fluid w-25" src={'https://s3.amazonaws.com/images.teladoc.com/www/2019/landing-pages/bdstart/3.png'} alt="" />
                        <p>Need help finding a local expert who specializes in your condition</p>
                        <Link to="/">Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;