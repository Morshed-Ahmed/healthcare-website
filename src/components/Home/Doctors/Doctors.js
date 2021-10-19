import React, { useEffect, useState } from 'react';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('Doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container">
            <div className="py-4">
                <h3>MEET OUR SPECIALISTS</h3>
                <img className="mb-2" src={'http://webstrot.com/html/deepmind/deepmind/images/Icon_team.png'} alt="" />
                <p>Find Doctors using the Most Important Criteria: Yours</p>
            </div>

            <div className="row py-4">

                {
                    doctors.map(doctor => <div className="col-md-6 col-lg-3">
                        <img className="img-fluid " src={doctor.imageURL} alt="" />
                        <h4>{doctor.name}</h4>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Doctors;