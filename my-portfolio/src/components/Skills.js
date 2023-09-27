import React from 'react';
import './Skills.css';

function Skills() {
    const skills = {
        "Front-end": ['HTML', 'CSS', 'JavaScript', 'React.js'],
        "Back-end": ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
        "Big-Data": ["PySpark", "Tableau", "Hadoop"]
        // ... You can add "Big Data" or other categories as needed
        // "Big Data": ['Skill1', 'Skill2', ...]
    };

    return (
        <section className="skills-section">
            <h2>Skills</h2>
            {Object.keys(skills).map(category => (
                <div key={category}>
                    <h3>{category}</h3>
                    <ul className="skills-list">
                        {skills[category].map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Skills;





