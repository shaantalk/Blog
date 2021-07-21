import React, { useEffect } from "react";
import Technology from "./Technology";

import {
  // Frontend
  javascript,
  react,
  redux,
  // graphql,
  // css,
  html,
  // sass,
  materialui,
  bootstrap,
  // typescript,
  // Backend
  nodejs,
  expressjs,
  socketio,
  // mongodb,
  postgresql,
  // firebase,
  python,
  django,
  docker,
  webpack,
  // aws,
  // vscode,
  git,
  // ubuntu,
  googleCloud,
  postman
} from "../Helpers/Svgs";

const frontEnd = [
  {
    title: "JavaScript",
    svg: javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { title: "React", svg: react, href: "https://www.reactjs.org" },
  { title: "Redux", svg: redux, href: "https://redux.js.org/" },
  // { title: "GraphQL", svg: graphql, href: "https://graphql.org/" },
  // {
  //   title: "CSS",
  //   svg: css,
  //   href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  // },
  { title: "Html", svg: html, href: "https://html.spec.whatwg.org/" },
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
  { title: "Express.js", svg: expressjs, href: "https://expressjs.com/" },
  { title: "Socket.io", svg: socketio, href: "https://socket.io/" },
  // { title: "MongoDB", svg: mongodb, href: "https://www.mongodb.com" },
  { title: "PostgreSQL", svg: postgresql, href: "https://www.postgresql.org" },
  // { title: "Firebase", svg: firebase, href: "https://firebase.google.com/" },
  { title: "Python", svg: python, href: "https://www.python.org/" },
  { title: "Django", svg: django, href: "https://www.djangoproject.com/" },
];

const tools = [
  { title: "Docker", svg: docker, href: "https://www.docker.com" },
  { title: "WebPack", svg: webpack, href: "https://webpack.js.org/" },
  // { title: "AWS", svg: aws, href: "https://aws.amazon.com/" },
  { title: "Git", svg: git, href: "https://git-scm.com/" },
  // { title: "Ubuntu", svg: ubuntu, href: "https://ubuntu.com/" },
  // { title: "VS Code", svg: vscode, href: "https://code.visualstudio.com/" },
  {title: "gCloud",svg: googleCloud, href: "https://cloud.google.com/"},
  {title: "Postman",svg: postman, href: "https://www.postman.com/"},
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
    <section className='technologies'>
      <h2 className='technologies__title'>
        Technologies I have worked on
      </h2>
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
    </section>
  );
};

export default Technologies;
