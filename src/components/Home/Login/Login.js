import React from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const { logInWithGoogle, user } = useFirebase();



    return (
        <div>
            <div className="row login-style container ">
                <div className="col-6">
                    <div className="login">
                        <h4>user : {user.email}</h4>
                        <Form.Control className="input" type="name" placeholder="Your Name" />
                        <br />
                        <Form.Control className="input" type="email" placeholder="Enter email" />
                        <br />
                        <Form.Control className="input" type="password" placeholder="Password" />
                        <br />


                        <button className="login-btn mb-4 ">Submit </button> <br />

                        <button onClick={logInWithGoogle} className="login-btn ">Google Sign In </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;