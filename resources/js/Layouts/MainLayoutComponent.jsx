import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './NavComponents';
import Footer from './footerComponents';
import Slidebar from './SlidebarComponent';
import RouteComp from './MainRouteComponent'



const MainLayout = ({user}) =>{

    useEffect(() => {


        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
              const script = document.createElement('script');
              script.src = src; // Set the script source
              script.async = false; // Load the script asynchronously
            //  script.defer = true;
              script.onload = () => resolve(); // Resolve the promise when the script loads
              script.onerror = () => reject(new Error(`Failed to load script: ${src}`)); // Reject if there's an error
              document.body.appendChild(script); // Append the script to the body
            });
          };
      
          // Load multiple scripts
          const loadScripts = async () => {
            try {
            await loadScript('https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js'); // Load custom.js
            await loadScript('https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'); // Load custom.js
            await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js');
            await loadScript('/dist/js/adminlte.js');

        


              } catch (error) {
              console.error(error); // Handle any errors
            }
          };
      
      
      
      
          loadScripts();


          // Cleanup function to remove scripts when the component unmounts
    return () => {
        // Remove all loaded scripts
        const scripts = ['https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js',
                        'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
                        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js',
                    '/dist/js/adminlte.js',
                  
                 ];


        scripts.forEach((scriptName) => {
          const scriptElement = document.querySelector(`script[src="${scriptName}"]`);
          if (scriptElement) {
            document.body.removeChild(scriptElement); 
          }
        });

        console.log("main comp script load ");
      };
   

       

          }, []);

          
     


    return(
        <div className="app-wrapper" id="appwrapper" >
         <Router>
            <Navigation  user={user} />
            <aside className="app-sidebar bg-body shadow" data-bs-theme="light">
            <div className="sidebar-brand">
                {/*--begin::Brand Link-- */}
                <a href="" className="brand-link">
                    {/*--begin::Brand Image-- */}
                    <img src="/dist/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image opacity-75 shadow" />
                    {/*--end::Brand Image-- */} {/*--begin::Brand Text-- */}
                    <span className="brand-text fw-light">AdminLTE 4</span>
                    {/*--end::Brand Text-- */}
                </a>
                {/*--end::Brand Link-- */}
            </div>
            {/*--end::Sidebar Brand-- */}
            {/*--begin::Sidebar Wrapper-- */}
            <div className="sidebar-wrapper">
                    <Slidebar/>
              
            </div> {/*--end::Sidebar Wrapper-- */}
        </aside>

 {/*--end::Sidebar-- */} {/*--begin::App Main-- */}



<main className="app-main"> {/*--begin::App Content Header-- */}
<div className="app-content-header"> {/*--begin::Container-- */}
    <div className="container-fluid" id=""> {/*--begin::Row-- */}
           <RouteComp/>
    </div> {/*--end::Container-- */}
</div> {/*--end::App Content-- */}
</main> <Footer/>
</Router>
</div>



);

};

export default MainLayout;
