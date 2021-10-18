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
            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                <br />
                nec sagittis sem nibh id elit. Duis sed odio sit sagittis sem nibh id elit.</p>

            <div className="row d-flex justify-content-start">

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
                {/*  {
                    services.map(service => <Service
                        service={service}
                    ></Service>
              } */}
            </div>




        </div >
    );
};

export default Services;