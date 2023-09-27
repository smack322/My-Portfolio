import React from 'react';
import './Projects.css';

function Projects() {
    const projectList = [
        {
            title: 'Project 1',
            description: 'Description for Project 1.',
            imageUrl: 'path-to-image1.jpg',
            projectLink: 'https://github.com/yourusername/project1',
        },
        {
            title: 'Project 2',
            description: 'Description for Project 2.',
            imageUrl: 'path-to-image2.jpg',
            projectLink: 'https://github.com/yourusername/project2',
        },
        // Add more projects as required
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.imageUrl} alt={project.title} className="project-image"/>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;






