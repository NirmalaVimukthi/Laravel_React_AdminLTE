import React, { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom'; 
import axios from 'axios';

const loginComponents = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password );

        try {
            const response = await axios.post('/api/login', {
                 email, password
            });
            console.log(response);
            localStorage.setItem('token', response.data.token);
            console.log('Login Successful!');
            navigate('/');
        } catch (error) {
            console.log(error);
            console.log("response Error");
            console.log(error.response.data);
            if (error.response && error.response.status === 404) {
                // Display validation errors returned from Laravel
               // setError('Login failed');
                setError(error.response.data); // `errors` contains the validation errors
            } 
            else if (error.response && error.response.status === 422) {
                setError(error.response.data); 
            }
            else {
                
                setError({ error: 'Login failed: Invalid credentials.' });
            }
        }
    };

    return(     
        <div className="login-box"  style={{ margin: 'auto' }}>
        <div className="login-logo"> <a href="#"><b>Ras</b>Fend</a> </div>
        <div className="card">
            <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3"> <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"/>
                        <div className="input-group-text"> <span className="bi bi-envelope"></span> </div>
                    </div>
                    <div className="input-group mb-3"> <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password"/>
                        <div className="input-group-text"> <span className="bi bi-lock-fill"></span> </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> <label className="form-check-label" for="flexCheckDefault">
                                    Remember Me
                                </label> </div>
                        </div>

                        <div className="row">
                        {error && (
                <div className="alert alert-danger" role="alert">
                    {Object.keys(error).map((key, index) => (
                        <div key={index}>
                            {Array.isArray(error[key]) ? ( // Check if error[key] is an array
                                error[key].map((errMsg, errIndex) => (
                                    <p key={errIndex}>{errMsg}</p>
                                ))
                            ) : (
                                <p>{error[key]}</p> // Fallback for non-array errors
                            )}
                        </div>
                    ))}
                </div>
            )}
                        
                        </div>

                        <div className="col-4">
                     
                            <div className="d-grid gap-2"> <button type="submit" className="btn btn-primary">Sign In</button> </div>
                        </div> 
                    </div> 
          </form>

                <p className="mb-0">
                <Link to="/register" className="text-center">
                        Register a new membership
                        </Link> </p>


            </div>
        </div>
    </div>

            );

};

export default loginComponents;
