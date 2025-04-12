import React, { useEffect, useRef } from 'react';
import '../styles/skills.css';

const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "React", level: "70%" },
];

const Skills = () => {
    // Add intersection observer to trigger animation when scrolled into view
    const skillsRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add class to trigger animation when visible
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }
        
        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div className="skills" ref={skillsRef}>
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
                    <span className="skill-percentage">{skill.level}</span>
                </div>
            ))}
        </div>
    );
};

export default Skills;
