import React, { useEffect, useRef } from 'react';
import '../styles/skills.css';

const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "React", level: "70%" },
];

const Skills = () => {
    useEffect(() => {
        const skillBars = document.querySelectorAll('.skill-bar-fill');
        skillBars.forEach((bar) => {
            const level = bar.getAttribute('style').split(':')[1].trim();
            bar.style.width = level;
        });
    }, []);

    return (
        <div className="skills">
            <h2>My Skills</h2>
            {skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <h3>{skill.name}</h3>
                    <div className="skill-bar">
                        <div 
                            className="skill-bar-fill" 
                            style={{ "--skill-level": skill.level } as React.CSSProperties}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
