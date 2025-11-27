import React from "react";

function Experience() {
    return (
        <>
            <div className="experienceContainer">
                <h1 className="headto">WORK EXPERIENCE</h1>
                
                <div className="experience">
                    <div className="experienceCard">
                        <div className="experienceHeader">
                            <h2>Amazon Associate</h2>
                            <div className="companyInfo">
                                <h3>Amazon</h3>
                                <p className="location">New York, New York</p>
                                <p className="duration">March 2019 - Present</p>
                            </div>
                        </div>
                        
                        <div className="experienceDetails">
                            <ul className="responsibilities">
                                <li>Collaborated with a large team to efficiently manage product flow within a warehouse, ensuring timely delivery to customers</li>
                                <li>Responsible for coordinating the storage of incoming stock from vendors as part of the Inbound team</li>
                                <li>Assisted the Outbound team in processing customer orders by picking, packing, and accurately staging packages according to item temperature requirements</li>
                                <li>Played a crucial role in maintaining the seamless flow of packages by collecting and delivering them to the appropriate location as a member of the Baggers team</li>
                                <li>Demonstrated strong teamwork and communication skills to meet strict time-sensitive requirements, ensuring on-time delivery to customers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="experienceCard">
                        <div className="experienceHeader">
                            <h2>Network Engineer Apprentice</h2>
                            <div className="companyInfo">
                                <h3>SOCITECH-CI</h3>
                                <p className="location">Abidjan, Côte d'Ivoire</p>
                                <p className="duration">August 2016 - December 2017</p>
                            </div>
                        </div>
                        
                        <div className="experienceDetails">
                            <ul className="responsibilities">
                                <li><strong>Installing and Designing:</strong> Installing computer networks, connections, and cabling, as well as server hardware and software infrastructure</li>
                                <li><strong>Troubleshooting:</strong> Identifying and solving problems like system failures and LAN infrastructure issues</li>
                                <li><strong>Evaluating:</strong> Evaluating network performance and scheduling upgrades and maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;