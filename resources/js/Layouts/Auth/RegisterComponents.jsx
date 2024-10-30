import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if you're using routing
import axios from 'axios';
const RegComponents = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(name,email, password );
        try {
            const response = await axios.post('/api/register', {
                name, email, password
            });
            console.log(response);
            localStorage.setItem('token', response.data.token);
            console.log('Registration Successful!');
        } catch (error) {
            console.log(error);
            console.log("response Error");
            console.log(error.response.data);
            if (error.response && error.response.status === 422) {
                // Display validation errors returned from Laravel
                setError(error.response.data); // `errors` contains the validation errors
            } else {
                setError('Registration failed');
            }
        }
    };

    return (
        <div className="register-box" style={{ margin: 'auto' }}>
            <div className="register-logo">
                <a href="#"><b>RAS</b>Fend </a>
            </div>
            <div className="card">
                <div className="card-body register-card-body">
                    <p className="register-box-msg">Register a new membership</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Full Name" />
                            <div className="input-group-text">
                                <span className="bi bi-person"></span>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                            <div className="input-group-text">
                                <span className="bi bi-envelope"></span>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                            <div className="input-group-text">
                                <span className="bi bi-lock-fill"></span>
                            </div>
                        </div>
                        <div className="row">
                        {error && (
                <div className="alert alert-danger" role="alert">
                    {Object.keys(error).map((key, index) => (
                        <div key={index}>
                            {error[key].map((errMsg, errIndex) => (
                                <span key={errIndex}>{errMsg}</span>  // Display each error message
                            ))}
                        </div>
                    ))}
                </div>
            )}
                        
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="mb-0">
                        <Link to="/login" className="text-center">
                            I already have a membership
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegComponents;
