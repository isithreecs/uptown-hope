import React from "react";
import './StaffingSolutions.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const StaffingSolutions = () => {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/contact');
    }

    return(
        <div className="staffing">
            <div className="cover"></div>
            <div className="wrapper">
                <div className="page-content-staffing">
                    <h2 id="title">Staffing</h2>
                    <div className="staff-content">
                        <div className="staff-1">
                            <p id="pg-staffing"> Is your business short on staff? 
                                Are you looking for staff to help jumpstart a new business venture? 
                                Or are you just looking to shake things up in an unconventional way? 
                                Whatever your Health Care staffing need, Uptown Hope can help.
                                <br />
                                <br />
                                <p> We current provide staffing for the following positions: 
                                    <ul>
                                        <li>CNA</li>
                                        <li>GNA</li>
                                        <li>Direct Support Professional/CMT</li>
                                        <li>House Manager</li>
                                        <li>Program Manager</li>
                                    </ul>
                                </p>
                                <div id="contact-us">
                                    Click to Contact button or send us an email
                                </div></p>
                        </div>
                        <div className="staff-2">
                            <img className="image-bus" 
                                alt='Corporate Card' 
                                src='../images/corporate_staff.png'
                                height='290rem'
                                width='435rem'
                            />
                        </div>
                    </div>
                    <div className="button">
                        <Button id="contact" variant="outline-secondary" onClick={handleClick}>Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffingSolutions;
