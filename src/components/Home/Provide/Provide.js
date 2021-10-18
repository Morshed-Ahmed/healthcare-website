import React from 'react';
import { Link } from 'react-router-dom';
import './Provide.css'
const Provide = () => {
    return (
        <div className="mt-5 provider-style">
            <div className="container py-4">
                <h2 className="my-4">WE PROVIDE TOP SERVICES</h2>
                <div className="row">
                    <div className="col-4">
                        <h4>HEART SURGERY</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
                        <Link>Read More </Link>
                    </div>
                    <div className="col-4">
                        <h4>DENTAL CARE</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
                        <Link>Read More </Link>
                    </div>
                    <div className="col-4">
                        <h4>EMERGENCY CARE</h4>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
                        <Link>Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;