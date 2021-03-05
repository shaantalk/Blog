import React, { useEffect } from "react";
import Technology from "./Technology";

import {
  // Frontend
  javascript,
  react,
  // redux,
  graphql,
  css,
  // sass,
  materialui,
  bootstrap,
  // typescript,
  // Backend
  nodejs,
  // mongodb,
  postgresql,
  firebase,
  python,
  django,
  // Docker
  // docker,
  // aws,
  vscode,
  git,
  // ubuntu,
  googleCloud,
} from "../Helpers/Svgs";

const frontEnd = [
  {
    title: "JavaScript",
    svg: javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { title: "React", svg: react, href: "https://www.reactjs.org" },
  // { title: "Redux", svg: redux, href: "https://redux.js.org/" },
  { title: "GraphQL", svg: graphql, href: "https://graphql.org/" },
  {
    title: "CSS",
    svg: css,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  // { title: "Sass", svg: sass, href: "https://sass-lang.com/" },
  { title: "Material UI", svg: materialui, href: "https://material-ui.com/" },
  { title: "Bootstrap", svg: bootstrap, href: "https://getbootstrap.com/" },
  // {
  //   title: "Typescript",
  //   svg: typescript,
  //   href: "https://www.typescriptlang.org/",
  // },
];

const backEnd = [
  { title: "Node.js", svg: nodejs, href: "https://nodejs.org/" },
  // { title: "MongoDB", svg: mongodb, href: "https://www.mongodb.com" },
  { title: "PostgreSQL", svg: postgresql, href: "https://www.postgresql.org" },
  { title: "Firebase", svg: firebase, href: "https://firebase.google.com/" },
  { title: "Python", svg: python, href: "https://www.python.org/" },
  { title: "Django", svg: django, href: "https://www.djangoproject.com/" },
];

const tools = [
  // { title: "Docker", svg: docker, href: "https://www.docker.com" },
  // { title: "AWS", svg: aws, href: "https://aws.amazon.com/" },
  { title: "Git", svg: git, href: "https://git-scm.com/" },
  // { title: "Ubuntu", svg: ubuntu, href: "https://ubuntu.com/" },
  { title: "VS Code", svg: vscode, href: "https://code.visualstudio.com/" },
  {
    title: "gCloud",
    svg: googleCloud,
    href: "https://cloud.google.com/",
  },
];

const createTechnology = ({ title, svg, href }) => (
  <Technology key={title} svg={svg} title={title} href={href} className='m-2' />
);

const Technologies = () => {
  useEffect(() => {
    // have to require here as importing at top breaks SSR
    // eslint-disable-next-line
    const ScrollReveal = require("scrollreveal").default;

    ScrollReveal().reveal(".technologies a, .technologies h3", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "left",
      interval: 75,
    });

    return () => ScrollReveal().destroy();
  }, []);

  return (
    <div className='technologies'>
      <h1 className='technologies__title'>
        Technologies covered in the blogs and projects
      </h1>
      <div className='technologies-centered'>
        <h3>Front End</h3>
        <div className='technologies__row'>
          {frontEnd.map(createTechnology)}
        </div>
      </div>

      <div className='technologies-centered'>
        <h3>Back End</h3>
        <div className='technologies__row'>{backEnd.map(createTechnology)}</div>
      </div>

      <div className='technologies-centered'>
        <h3>DevOps & Tools</h3>
        <div className='technologies__row'>{tools.map(createTechnology)}</div>
      </div>
    </div>
  );
};

export default Technologies;
