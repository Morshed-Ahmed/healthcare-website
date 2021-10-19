import React, { useState } from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { logInWithGoogle, user, handleUserRegister, handleUserLogin } = useFirebase();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'
    /* console.log('came form', location.state?.form) */

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);

    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);

    };

    const handleRegister = () => {
        handleUserRegister(email, password);
    };

    const handleLogin = () => {
        handleUserLogin(email, password);
    };


    return (
        <div>
            <div className="row login-style container ">
                <div className="col-6">
                    <div className="login">

                        <Form.Control className="input" type="name" placeholder="Your Name" />
                        <br />
                        <Form.Control onChange={hanldeEmail} className="input" type="email" placeholder="Enter email" />
                        <br />
                        <Form.Control onChange={hanldePassword} className="input" type="password" placeholder="Password" />
                        <br />


                        <button onClick={handleRegister} className="login-btn mb-4  ">Register </button>
                        <button onClick={handleLogin} className="login-btn mb-4 ms-3">  Login </button>

                        <br />

                        <button onClick={handleGoogleLogin} className="login-btn ">Google Sign In </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;