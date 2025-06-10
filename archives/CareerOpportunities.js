import React from "react";
import './Employment.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const CareerOpportunities = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate('/contact');
    }

    return(
        <div className="employment">
            <div className="cover"></div>
            <div id="wrapper">
                <div id="page-content">
                    <h2 id="title">Careers at Uptown Hope</h2>
                    <h3 id="banner">Start your new career today!</h3>
                    <p id="top-pg"> As an Associate at Uptown Hope, 
                        you'll have the freedom to work when you want, 
                        where you want! Associates at Uptown Hope have access to some of the best positions in a variety of health care fields.
                    </p>
                    <div className="career-content">
                        <div className="col-1">
                            <p>
                                The positions that we hire for include:
                                <ul>
                                    <li>Behavioral Health Specialist</li>
                                    <li>CNA</li>
                                    <li>CMA</li>
                                    <li>GNA</li>
                                    <li>Direct Support Professional/CMT</li>
                                    <li>House Manager</li>
                                    <li>Intake Specialist</li>
                                    <li>Job Coach</li>
                                    <li>Job Developer</li>
                                    <li>Medical Assistant</li>
                                    <li>Medical Records Clerk</li>
                                    <li>Mental Health Counselor</li>
                                    <li>Occupational Therapist</li>
                                    <li>Personal Care Assistant</li>
                                    <li>Program Manager</li>
                                    <li>Quality Assurance</li>
                                    <li>Social Worker</li>
                                    <li>Therapeutic Support Staff</li>
                                </ul>
                            </p>
                            <p className="pg"> 
                                If this is something you think may interest you, email us via the email address list below, or  
                                click the contact button, simply click the "Contact Us" button on this page. 
                                Including a pdf copy of your resume, if applicable, would be greatly appreciated.
                            </p>
                        </div>
                        <div className="col-2">
                            <img className="image-car" 
                                alt='Direct Support and Client' 
                                src='../images/direct_care.jpg'
                                height='290rem'
                                width='435rem'
                            />
                            <div className="button">
                                <Button id="contact-cs" variant="outline-secondary" onClick={handleClick}>Contact Us</Button>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    );
}

export default CareerOpportunities;