import React from "react";
import ProgressBar from "./ProgressBar";
import * as svgs from "../Helpers/Svgs";
// import "../Styles/Skill.css";

const Skill = ({ skillIcon, skillName, percent }) => {
  return (
    <>
      <div className='skill'>
        <div className='skillText'>
          <div className='skillIcon'>
            <img src={svgs[skillIcon]} alt={skillIcon} />
          </div>
          <div className='skillName'>{skillName}</div>
          <div className='skillPercent'>{`${percent} %`}</div>
        </div>
        <ProgressBar percent={percent} />
      </div>
    </>
  );
};

export default Skill;
