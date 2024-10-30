import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashbord';
import Home from '../Pages/Home';

const MainRoute = () =>{

  return (
    <div>
    <div className="app-content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="mb-0">Dashboard</h3>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-end">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Dashboard
                                </li>
                            </ol>
                        </div>
                    </div> 
                </div> 
            </div>
           
           
                 <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/dashbord" element={<Dashboard />} />
                     <Route path="/Home" element={<Home />} />
                 </Routes>
 
             </div>
);

};

export default MainRoute;
