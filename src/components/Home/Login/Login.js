import React from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <div className="row login-style container ">
                <div className="col-6">
                    <div className="login">
                        <Form.Control className="input" type="name" placeholder="Your Name" />
                        <br />
                        <Form.Control className="input" type="email" placeholder="Enter email" />
                        <br />
                        <Form.Control className="input" type="password" placeholder="Password" />
                        <br />


                        <button className="login-btn ">Submit </button>
                    </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    );
};

export default Login;