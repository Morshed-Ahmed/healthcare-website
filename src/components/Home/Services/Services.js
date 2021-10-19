import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)
    return (
        <div className="my-5 container">
            <h1>TOP SERVICES</h1>
            <img className="mb-3" src={'http://webstrot.com/html/deepmind/deepmind/images/Icon_team.png'} alt="" />
            <p>Use Best Doctors when you or an eligible dependent:</p>

            <div className="row d-flex justify-content-start">

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>




        </div >
    );
};

export default Services;