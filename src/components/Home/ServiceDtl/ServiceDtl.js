import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDtl = () => {

    const { serviceDtls } = useParams();

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const newItem = data.filter(td => td._id == serviceDtls);

    /* console.log(serviceDtls) */
    return (

        <div className=" mx-auto mt-5">
            <img src={newItem[0]?.imageURL} alt="" />
            <h4>{newItem[0]?.name}</h4>
            <p>{newItem[0]?.description}</p>

        </div>
    );
};

export default ServiceDtl;