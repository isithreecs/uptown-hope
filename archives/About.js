import React from "react";
import './About.css';

const About = () => {
    return(
        <div className="about">
            <div className="cover"></div>
            <div className="wrapper">
                <div className="page-content">
                    <div className='mission'>
                        <h2 id="title">Mission</h2>
                        <p className="mission-text">
                            <strong>HOPE</strong> (Holistic, Opportunity, Preparation, Empowerment) is the foundation of the 
                            existence of <strong>Uptown Hope (UH)</strong>. The mission of UH is to use a <strong>Holistic</strong> approach to provide quality service, embrace the <strong>Opportunity</strong> to help improve each client's productivity through 
                            <strong>Empowerment</strong>, and focus on assistence and <strong>Preparation</strong> to always achieve a positive outcome.
                            <br />
                            <br />
                            <strong>At Uptown Hope we strive to:</strong><br /><br />
                            <ul>
                                <li>Provide a culture of involvement, partnership, healing and hope.</li>
                                <li>Create an environment where clients are treated with respect and dignity.</li>
                                <li>Embrace and apply the principles of empowerment, independence, and self-confidence in program development and service delivery: 
                                    Empowerment - allow clients to participate and collaborate in the way services are planned, structured and delivered; 
                                    Independence - encourage clients to take more control and personal responsibility for the setting and achievement of goals and decision making on things affecting their lives; 
                                    Self-confidence - help the clients to understand their high self-worth, regardless of the condition.
                                </li>
                            </ul>
                            </p>
                    </div>
                    <div className="vis-val">
                        <div className='vision'>
                            <h2 id="title">Vision</h2>
                            <ul className="vision-list">
                                <li>
                                    Continuously support and promote a culture of inclusion and hope.
                                </li>
                                <li>
                                    Provide an environment that is safe, secure, healthy and inclusive, and demand and expect all employees to embrace and support this environment.
                                </li>
                                <li>
                                    Achieve superior integrated service to support a culture of hope in achieving each client's stated goal and objective.
                                </li>
                                <li>
                                    Treat each client and employee in a dignified and respectful manner, and as a contributing member of the community without stigma and discrimination from anyone and anywhere.​
                                </li> 
                                <li>
                                    Maintain a positive relationship with the clients, employees, families, advocates, and the community.
                                </li> 
                                <li>
                                    Offer employees a dignified, fun and rewarding workplace where they can prosper and grow personally and professionally.
                                </li>
                            </ul>
                        </div>
                        <div className='values'>
                            <h2 id="title">Values</h2>
                            <ul className="values-list">
                                <li>
                                    Provide a culture of involvement, partnership through holistic approach.
                                </li>
                                <li>
                                    Create an environment where clients are treated with respect and dignity, empowered and encouraged to participate in program planning and service delivery through collaboration.
                                </li>
                                <li>
                                    Hire qualified, cheerful, and courteous employees capable of treating the clients with respect and warmth.
                                </li>
                                <li>
                                    Encourage and support clients to be independent in the creation of their goals and objectives.
                                </li> 
                                <li>
                                    Continuously ensure that each client is prepared to successfully achieve their stated goals and objectives.
                                </li> 
                                <li>
                                    Provide continuity of services that are necessary for success, and quality services that emphasize effective growth and development.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;