import React, { useEffect } from "react";
import Skill from "./Skill";
import skills from "../Content/Data/Skills.json";
import "../Styles/Skills.css";

const createSkills = ({ icon, name, percent }) => (
  <Skill skillIcon={icon} skillName={name} percent={percent} />
);

const Skills = () => {
  useEffect(() => {
    // have to require here as importing at top breaks SSR
    // eslint-disable-next-line
    const ScrollReveal = require("scrollreveal").default;

    ScrollReveal().reveal(".skill", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "left",
      interval: 75,
    });

    return () => ScrollReveal().destroy();
  }, []);

  return (
    <div className='skills'>
      <h1 className='skills_title'>Skill Coverage</h1>
      <div className='skills_centered'>
        <div className='skills_row'>{skills.map(createSkills)}</div>
      </div>
    </div>
  );
};

export default Skills;
