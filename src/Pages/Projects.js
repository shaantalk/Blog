import React, { useEffect, useState } from "react";
import * as svgs from "../Helpers/Svgs";
import { isNewPost, formatDate } from "../Helpers/Posts";
import Loader from "../Components/Loader";

import "../Styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [waiting, setWaiting] = useState(true);

  const getProjects = (first_cb, second_cb) => {
    const blogs = require("../Content/Data/Projects.json");
    first_cb(blogs, second_cb);
  };

  const setBlogsVal = (projects, cb) => {
    setProjects(projects);
    setWaiting(false);
    cb();
  };

  const projectsAnimation = () => {
    // have to require here as importing at top breaks SSR
    // eslint-disable-next-line
    const ScrollReveal = require("scrollreveal").default;

    ScrollReveal().reveal(".project-list div", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 75,
    });

    return () => ScrollReveal().destroy();
  };

  useEffect(() => {
    getProjects(setBlogsVal, projectsAnimation);
  }, [projects]);

  return waiting ? (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Loader />
    </div>
  ) : (
    <div className='project-list'>
      {projects.map((project, idx) => {
        let title = project.title;
        let techs = project.techs;
        return (
          <div className='project'>
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              key={idx}
            >
              <article>
                <div>
                  <header>
                    <h1 className='projName'>{title}</h1>
                    <span>{formatDate(project.date)}</span>
                  </header>
                </div>
              </article>
              {isNewPost(project.date) && (
                <span className='project-list__new pill'>New!</span>
              )}
            </a>
            <p className='desc'>{project.description}</p>
            <div className='techs'>
              {techs.map((tech, idx1) => {
                return <img src={svgs[tech]} alt={tech} key={idx1} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
