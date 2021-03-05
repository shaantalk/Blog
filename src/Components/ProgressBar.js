import React from "react";
import "../Styles/ProgressBar.css";

const ProgressBar = ({ percent }) => {
  return (
    <div className='progressBarContainer'>
      <div className='progressBar' style={{ width: `${percent || 50}%` }}></div>
    </div>
  );
};

export default ProgressBar;
