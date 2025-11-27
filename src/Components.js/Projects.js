import React, { useState } from "react";

function Projects() {
    const [expandedProjects, setExpandedProjects] = useState({});

    const toggleExpanded = (projectId) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    const projects = [
        {
            id: 'orderdabaly',
            title: 'OrderDabaly',
            url: 'http://www.orderdabaly.com',
            shortDescription: 'A comprehensive platform to connect restaurants and customers.',
            fullDescription: 'A comprehensive platform to connect restaurants and customers. It allows restaurant owners to easily manage their restaurant online - they decide the price of their dishes, their delivery fees and every other detail. On the client side, customers can order food online and follow their orders in real time.',
            features: [
                'Restaurant management dashboard',
                'Real-time order tracking',
                'Dynamic pricing control',
                'Customer ordering interface'
            ]
        },
        {
            id: 'qrcode',
            title: 'QR Code Generator',
            url: 'https://free-qrcode-generate.netlify.app/',
            shortDescription: 'A free QR code generator app that allows users to create simple QR codes.',
            fullDescription: 'A free QR code generator app that allows users to create simple QR codes in multiple formats for download and print. Perfect for businesses, events, or personal use.',
            features: [
                'Multiple QR code formats',
                'Instant download capability',
                'Print-ready output',
                'Clean, user-friendly interface'
            ]
        },
        {
            id: 'profile',
            title: 'Kande Online Profile',
            url: 'https://kandeonlineprofile.netlify.app/',
            shortDescription: 'My personal online profile designed to showcase my accomplishments.',
            fullDescription: 'My personal online profile designed to showcase my accomplishments, skills, and professional journey. A comprehensive portfolio highlighting my work and achievements in web development.',
            features: [
                'Professional portfolio showcase',
                'Skills and experience display',
                'Responsive design',
                'Interactive user interface'
            ]
        }
    ];

    return (
        <>
            <div className="projectsContainer">
                <h1 className="headto">PROJECTS</h1>
                
                <div className="projectsWrapper">
                    {projects.map(project => (
                        <div key={project.id} className="project">
                            <div className="projectCard">
                                <div className="projectHeader">
                                    <h2>{project.title}</h2>
                                    <a href={project.url} target="_blank" rel="noreferrer" className="projectLink">
                                        Visit Project →
                                    </a>
                                </div>
                                
                                <div className="projectDetails">
                                    <p className="projectDescription">
                                        {expandedProjects[project.id] 
                                            ? project.fullDescription 
                                            : project.shortDescription
                                        }
                                        <button 
                                            className="readMoreBtn"
                                            onClick={() => toggleExpanded(project.id)}
                                        >
                                            {expandedProjects[project.id] ? ' Read Less' : ' Read More'}
                                        </button>
                                    </p>
                                    
                                    <div className="projectFeatures">
                                        <h4>Key Features:</h4>
                                        <ul>
                                            {project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;