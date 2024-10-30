import React, { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom'; 
import axios from 'axios';

const dashbordpage = () =>{

    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Title</h3>
                                    <div className="card-tools"> <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse" title="Collapse"> <i data-lte-icon="expand" className="bi bi-plus-lg"></i> <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> </button> <button type="button" className="btn btn-tool" data-lte-toggle="card-remove" title="Remove"> <i className="bi bi-x-lg"></i> </button> </div>
                                </div>
                                <div className="card-body">
                                    Start creating your amazing application!
                                </div>
                                <div className="card-footer">Footer</div> 
                            </div> 
                        </div>
                    </div>

            );

};

export default dashbordpage;
