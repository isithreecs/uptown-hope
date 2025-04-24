import React from "react";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace, faSun, faHourglass2, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return(
        <div className="main">
            <div className="top-block">
                <h1>Uptown Hope, LLC</h1>
                <p><em><strong>Positive Outlook, Open and Healthy Mind are the keys to success. 
                    <br/>Ability and Opportunity begins with Availability</strong></em>
                </p>
            </div>
            <div className="cover-home"></div>
            <div className="wrapper-symbols">
                    <div className="symbol-block">
                        <FontAwesomeIcon icon={faPeace} className="icon"/>
                        <h3 className="acronym">Holistic</h3>
                        <p>approach to quality service provision</p>
                    </div>
                    <div className="symbol-block">
                        <FontAwesomeIcon icon={faSun} className="icon"/>
                        <h3 className="acronym">Opportunity</h3> 
                        <p>for clients to effectively fill any staffing vacancies</p>
                    </div>
                    <div className="symbol-block">
                        <FontAwesomeIcon icon={faHourglass2} className="icon"/>
                        <h3 className="acronym">Preparation</h3>
                        <p>to always achieve a positive outcome</p>
                    </div>
                    <div className="symbol-block">
                        <FontAwesomeIcon icon={faHandsHelping} className="icon"/>
                        <h3 className="acronym">Empowerment</h3>
                        <p>and assistance</p>
                    </div>
                </div>
                <div className="info">
                    <img 
                        className="info-image"
                        src="../images/sunshine.jpg" 
                        alt="Random" 
                        />
                    <p className="info-text">
                        300 Redland Ct., Suite 309 <br />
                        Owings Mills, MD 21117 <br />
                        (410) 363-9495 <br />
                        <a href = "mailto: info.uptownhope@gmail.com">info.uptownhope@gmail.com</a>
                        <br /><br />
                    </p>
                </div>
                <p className="info-bottom">
                    Uptown Hope (UH) is a limited liability 
                    company organized under the Laws of the State of Maryland. 
                    We offer Health Care staff for a wide variety of positions
                    <br /><br />
                    For a full list of positions we fill, see the <strong>Services</strong> page.
                </p>
            <div>
                
            </div>
        </div>
    );
}

export default Home;