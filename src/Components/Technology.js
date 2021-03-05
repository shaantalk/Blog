import React from "react";
import "../Styles/Technologies.css";

const Technology = ({ svg, title, href }) => (
  <a
    href={href}
    className='technology'
    target='_blank'
    rel='noopener noreferrer'
  >
    <img src={svg} alt={title} />
    <span variant='subtitle'>{title}</span>
  </a>
);

export default Technology;
