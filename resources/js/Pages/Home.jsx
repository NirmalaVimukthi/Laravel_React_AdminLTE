import React, { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom'; 
import axios from 'axios';

const homepage = () =>{

    return(        <div className="app-content"> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12"> 
                    <div className="timeline">
                        <div className="time-label"> <span className="text-bg-danger">10 Feb. 2023</span> </div> 
                        <div> <i className="timeline-icon bi bi-envelope text-bg-primary"></i>
                            <div className="timeline-item"> <span className="time"> <i className="bi bi-clock-fill"></i> 12:05
                                </span>
                                <h3 className="timeline-header"> <a href="#">Support Team</a> sent you an email
                                </h3>
                                <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy
                                    zoodles, weebly ning heekya handango imeem plugg dopplr
                                    jibjab, movity jajah plickers sifteo edmodo ifttt
                                    zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu
                                    weebly balihoo...
                                </div>
                                <div className="timeline-footer"> <a className="btn btn-primary btn-sm">Read more</a> <a className="btn btn-danger btn-sm">Delete</a> </div>
                            </div>
                        </div>
                        <div> <i className="timeline-icon bi bi-person text-bg-success"></i>
                            <div className="timeline-item"> <span className="time"> <i className="bi bi-clock-fill"></i> 5 mins ago
                                </span>
                                <h3 className="timeline-header no-border"> <a href="#">Sarah Young</a> accepted your friend request
                                </h3>
                            </div>
                        </div>
                        <div> <i className="timeline-icon bi bi-chat-text-fill text-bg-warning"></i>
                            <div className="timeline-item"> <span className="time"> <i className="bi bi-clock-fill"></i> 27 mins ago
                                </span>
                                <h3 className="timeline-header"> <a href="#">Jay White</a> commented on your post
                                </h3>
                                <div className="timeline-body">
                                    Take me to your leader! Switzerland is small and
                                    neutral! We are more like Germany, ambitious and
                                    misunderstood!
                                </div>
                                <div className="timeline-footer"> <a className="btn btn-warning btn-sm">View comment</a> </div>
                            </div>
                        </div> 
                        <div className="time-label"> <span className="text-bg-success">3 Jan. 2023</span> </div>
                        <div> <i className="timeline-icon bi bi-camera text-bg-primary"></i>
                            <div className="timeline-item"> <span className="time"> <i className="bi bi-clock-fill"></i> 2 days ago
                                </span>
                                <h3 className="timeline-header"> <a href="#">Mina Lee</a> uploaded new photos
                                </h3>
                                <div className="timeline-body"> <img src="/dist/assets/img/user1-128x128.jpg" alt="..."/> <img src="/dist/assets/img/user1-128x128.jpg" alt="..."/> <img src="/dist/assets/img/user1-128x128.jpg" alt="..."/> <img src="/dist/assets/img/user1-128x128.jpg" alt="..."/> </div>
                            </div>
                        </div>
                        <div> <i className="timeline-icon bi bi-camera-film text-bg-info"></i>
                            <div className="timeline-item"> <span className="time"> <i className="bi bi-clock-fill"></i> 5 days ago
                                </span>
                                <h3 className="timeline-header"> <a href="#">Mr. Doe</a> shared a video
                                </h3>
                                <div className="timeline-body">
                                    <div className="ratio ratio-16x9"> <iframe src="https://www.youtube.com/embed/tMWkeBIohBs" allowfullscreen=""></iframe> </div>
                                </div>
                                <div className="timeline-footer"> <a href="#" className="btn btn-sm text-bg-warning">
                                        See comments
                                    </a> </div>
                            </div>
                        </div> 
                        <div> <i className="timeline-icon bi bi-clock-fill text-bg-secondary"></i> </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>

            );

};

export default homepage;
