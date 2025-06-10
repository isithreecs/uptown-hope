import React from "react";
import './Services.css';

const Services = () => {
    return(
        <div className="service-page">
            <div className="cover"></div>
            <div className="wrapper">
                <div className="page-content">
                    <div className='services'>
                        <h2 id="title">Services</h2>
                        <p className="services-text">
                           Health Care staff agency providing temporary staff support 
                           or assistance to the following facilities:
                            <br />
                            <br />
                            <ul>
                                <li>Addiction Treatment Centers</li>
                                <li>Adult and Medical Day Care Centers</li>
                                <li>Assisted Living Centers</li>
                                <li>Behavioral Health Facilities/Centers</li>
                                <li>Community Agencies</li>
                                <li>Development Disability Administration Providers
                                    <ul>
                                        <li>Residential Settings/Group Homes for Adults and Youth with IDD​</li>
                                        <li>Group Homes for Children with Behavioral Health challenges</li>
                                        <li>Self-Directed Services Participants</li>
                                        <li>Community Pathways Waiver</li>
                                        <li>Autism Waiver</li>
                                        <li>Other vocational day programs, including Community Development Services</li>
                                        <li>Employment Support Programs</li>
                                    </ul>
                                </li>
                                <li>Domiciliary Care Settings</li>
                                <li>Family Support Programs</li>
                                <li>Family and Child Welfare Services Agencies</li>
                                <li>Government Agencies (child welfare, aging services, juvenile justice)</li>
                                <li>Group Homes</li>
                                <li>Hospitals</li>
                                <li>Long Term Care and Rehabilitation Facilities/Centers</li>
                                <li>Nursing Home/Care</li>
                                <li>Personal Care Homes/Settings</li>
                                <li>Private Duty</li>
                                <li>School Systems</li>
                                <li>Skilled Nursing Facilities</li>
                                <li>Title V Schools</li>
                                <li>Treatment and Transitional Housing</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;