import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { _id, name, imageURL, description } = props.service;


    return (
        <>
            <div className="col-md-6 col-lg-4 ">

                <div>
                    <img className="img-fluid" src={imageURL} alt="" />
                </div>

                <h4 className="">{name}</h4>
                <p>{description}</p>
                <Link to={`/service/${_id}`}>
                    <button className="card-btn" >Read More </button>
                </Link>
            </div>
        </>
    );
};

export default Service;