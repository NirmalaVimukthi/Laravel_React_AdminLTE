import {React, useEffect} from 'react';
import { Link,useNavigate, useLocation  } from 'react-router-dom'; 



const SlidebarLayout = () =>{

    const location = useLocation();

    const isActive = (path) => {
      return location.pathname === path;// when using `useLocation`
    };
    


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
     
                await loadScript('https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js');


              } catch (error) {
              console.error(error); // Handle any errors
            }
          };
      
      
      
      
          loadScripts();


          // Cleanup function to remove scripts when the component unmounts
    return () => {
        // Remove all loaded scripts
        const scripts = [
                    'https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js',
                 ];


        scripts.forEach((scriptName) => {
          const scriptElement = document.querySelector(`script[src="${scriptName}"]`);
          if (scriptElement) {
            document.body.removeChild(scriptElement); 
          }
        });



        console.log("Script most ");
        Promise.all(scripts.map(src => loadScript(src)))
        .then(() => {         
        const SELECTOR_SIDEBAR_WRAPPER = ".sidebar-wrapper";
        const Default = {
            scrollbarTheme: "os-theme-light",
            scrollbarAutoHide: "leave",
            scrollbarClickScroll: true,
        };

        document.addEventListener("DOMContentLoaded", function() {
            const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);
            if (
                sidebarWrapper &&
                typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== "undefined"
            ) {
                OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
                    scrollbars: {
                        theme: Default.scrollbarTheme,
                        autoHide: Default.scrollbarAutoHide,
                        clickScroll: Default.scrollbarClickScroll,
                    },
                });
            }
        });


        const connectedSortables = document.querySelectorAll(".connectedSortable");
    connectedSortables.forEach((connectedSortable) => {
        let sortable = new Sortable(connectedSortable, {
            group: "shared",
            handle: ".card-header",
        });
    });

    const cardHeaders = document.querySelectorAll(
        ".connectedSortable .card-header",
    );
    cardHeaders.forEach((cardHeader) => {
        cardHeader.style.cursor = "move";
    });
})
    .catch(err => {
        console.error("Error loading scripts", err);
    });
      };
   
        console.log("Script working ");

          }, []);

    return( <nav className="mt-2"><ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open"> <a href="#" className="nav-link active"> <i className="nav-icon bi bi-speedometer"></i>
                            <p>
                                Dashboard
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <Link to="/dashbord" className={isActive('/dashbord') ? "active nav-link " : " nav-link "} > <i className="nav-icon bi bi-circle"></i>
                                    <p>Dashboard </p>
                                </Link> </li>
                                <li className="nav-item"> <Link to="/home" className={isActive('/home') ? "active nav-link " : " nav-link "} > <i className="nav-icon bi bi-circle"></i>
                                    <p>Home</p>
                                </Link> </li>
                                <li className="nav-item"> <Link to="/" className={isActive('/') ? "active nav-link " : " nav-link "} > <i className="nav-icon bi bi-circle"></i>
                                    <p>Main Page</p>
                                </Link> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="./generate/theme.html" className="nav-link"> <i className="nav-icon bi bi-palette"></i>
                            <p>Theme Generate</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-seam-fill"></i>
                            <p>
                                Widgets
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./widgets/small-box.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Small Box</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./widgets/info-box.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>info Box</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./widgets/cards.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Cards</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-clipboard-fill"></i>
                            <p>
                                Layout Options
                                <span className="nav-badge badge text-bg-secondary me-3">6</span> <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./layout/unfixed-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Default Sidebar</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./layout/fixed-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Fixed Sidebar</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./layout/layout-custom-area.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Layout <small>+ Custom Area </small></p>
                                </a> </li>
                                <li className="nav-item"> <a href="./layout/sidebar-mini.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Sidebar Mini</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./layout/collapsed-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Sidebar Mini <small>+ Collapsed</small></p>
                                </a> </li>
                                <li className="nav-item"> <a href="./layout/logo-switch.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Sidebar Mini <small>+ Logo Switch</small></p>
                                </a> </li>
                                <li className="nav-item"> <a href="./layout/layout-rtl.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Layout RTL</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-tree-fill"></i>
                            <p>
                                UI Elements
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./UI/general.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>General</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./UI/icons.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Icons</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./UI/timeline.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Timeline</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-pencil-square"></i>
                            <p>
                                Forms
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./forms/general.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>General Elements</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-table"></i>
                            <p>
                                Tables
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./tables/simple.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Simple Tables</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                            <p>
                                Auth
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                    <p>
                                        Version 1
                                        <i className="nav-arrow bi bi-chevron-right"></i>
                                    </p>
                                </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./examples/login.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                            <p>Login</p>
                                        </a> </li>
                                        <li className="nav-item"> <a href="./examples/register.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                            <p>Register</p>
                                        </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                    <p>
                                        Version 2
                                        <i className="nav-arrow bi bi-chevron-right"></i>
                                    </p>
                                </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="./examples/login-v2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                            <p>Login</p>
                                        </a> </li>
                                        <li className="nav-item"> <a href="./examples/register-v2.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                            <p>Register</p>
                                        </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="./examples/lockscreen.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Lockscreen</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-header">DOCUMENTATIONS</li>
                        <li className="nav-item"> <a href="./docs/introduction.html" className="nav-link"> <i className="nav-icon bi bi-download"></i>
                            <p>Installation</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./docs/layout.html" className="nav-link"> <i className="nav-icon bi bi-grip-horizontal"></i>
                            <p>Layout</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./docs/color-mode.html" className="nav-link"> <i className="nav-icon bi bi-star-half"></i>
                            <p>Color Mode</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-ui-checks-grid"></i>
                            <p>
                                Components
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./docs/components/main-header.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Main Header</p>
                                </a> </li>
                                <li className="nav-item"> <a href="./docs/components/main-sidebar.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Main Sidebar</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-filetype-js"></i>
                            <p>
                                Javascript
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="./docs/javascript/treeview.html" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Treeview</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="./docs/browser-support.html" className="nav-link"> <i className="nav-icon bi bi-browser-edge"></i>
                            <p>Browser Support</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./docs/how-to-contribute.html" className="nav-link"> <i className="nav-icon bi bi-hand-thumbs-up-fill"></i>
                            <p>How To Contribute</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./docs/faq.html" className="nav-link"> <i className="nav-icon bi bi-question-circle-fill"></i>
                            <p>FAQ</p>
                        </a> </li>
                        <li className="nav-item"> <a href="./docs/license.html" className="nav-link"> <i className="nav-icon bi bi-patch-check-fill"></i>
                            <p>License</p>
                        </a> </li>
                        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                            <p>Level 1</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                            <p>
                                Level 1
                                <i className="nav-arrow bi bi-chevron-right"></i>
                            </p>
                        </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Level 2</p>
                                </a> </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>
                                        Level 2
                                        <i className="nav-arrow bi bi-chevron-right"></i>
                                    </p>
                                </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                                            <p>Level 3</p>
                                        </a> </li>
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                                            <p>Level 3</p>
                                        </a> </li>
                                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-record-circle-fill"></i>
                                            <p>Level 3</p>
                                        </a> </li>
                                    </ul>
                                </li>
                                <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle"></i>
                                    <p>Level 2</p>
                                </a> </li>
                            </ul>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle-fill"></i>
                            <p>Level 1</p>
                        </a> </li>
                        <li className="nav-header">LABELS</li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-danger"></i>
                            <p className="text">Important</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-warning"></i>
                            <p>Warning</p>
                        </a> </li>
                        <li className="nav-item"> <a href="#" className="nav-link"> <i className="nav-icon bi bi-circle text-info"></i>
                            <p>Informational</p>
                        </a> </li>
                    </ul></nav>
         
);

};

export default SlidebarLayout;
