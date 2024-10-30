import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


 import LoginComponents from './LoginComponents';
 import RegComponents from './RegisterComponents';

const layoutsComponents = () =>{

    return(    

            <Router>
           
                 <Routes>
                     <Route path="/" element={<LoginComponents />} />
          <Route path="/login" element={<LoginComponents />} />
          <Route path="/register" element={<RegComponents />} />
                 </Routes>
             </Router>


            );

};

export default layoutsComponents;
