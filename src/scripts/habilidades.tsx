const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "React", level: "70%" },
];

const skillsContainer = document.getElementById("skills-container");

if (skillsContainer) {
    skills.forEach(skill => {
        const skillDiv = document.createElement("div");
        skillDiv.className = "skill";

        const skillTitle = document.createElement("h3");
        skillTitle.textContent = skill.name;

        const skillBar = document.createElement("div");
        skillBar.className = "skill-bar";

        const skillBarFill = document.createElement("div");
        skillBarFill.className = "skill-bar-fill";
        skillBarFill.style.setProperty("--skill-level", skill.level);

        skillBar.appendChild(skillBarFill);
        skillDiv.appendChild(skillTitle);
        skillDiv.appendChild(skillBar);
        skillsContainer.appendChild(skillDiv);
    });
}
