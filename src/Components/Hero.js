import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import { Button } from "@material-ui/core";

// Styles
import "../Styles/Hero.css";

export default function Hero() {
  useEffect(() => {
    anime
      .timeline({
        targets: ".hero__box--05",
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: "500px",
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateY: "-15deg",
        rotateX: "8deg",
        rotateZ: "-1deg",
      });

    anime
      .timeline({
        targets: ".hero__box--06, .hero__box--07",
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: "500px",
        delay: anime.random(0, 400),
      })
      .add({
        duration: 400,
        easing: "easeInOutExpo",
        scaleX: 1,
      })
      .add({
        duration: 800,
        rotateZ: "20deg",
      });

    anime({
      targets:
        ".hero__box--01, .hero__box--02, .hero__box--08, .hero__box--09, .hero__box--10",
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [anime.random(-360, 360), el => el.getAttribute("data-rotation")],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });
  }, []);

  return (
    <section className='hero'>
      <div className='hero__inner'>
        <div className='hero__copy'>
          <h1>
            Hi, I'm Santanu <span>👋</span>
          </h1>
          <p>
            I'm Full-Stack Developer from India. <br />
            I'm self-taught and I love making things on the web,
            <br />
            focusing on JavaScript and Python.
          </p>
          <div className='hero__cta'>
            {[
              { name: "Projects", to: "/projects" },
              { name: "Blogs", to: "blogs/#/" },
            ].map((elem, idx) => (
              <Button
                key={idx}
                variant='contained'
                component={Link}
                to={elem.to}
                className='sp_btn'
                size='large'
              >
                {elem.name}
              </Button>
            ))}
          </div>
        </div>
        <figure className='hero__figure anime-element'>
          <svg
            className='placeholder'
            width='480'
            height='396'
            viewBox='0 0 480 396'
          >
            <rect width='480' height='396' style={{ fill: "transparent" }} />
          </svg>
          <div className='hero__box hero__box--01' data-rotation='45deg'></div>
          <div className='hero__box hero__box--02' data-rotation='-45deg'></div>
          <div />
          <div className='hero__box hero__box--05'></div>
          <div className='hero__box hero__box--06'></div>
          <div className='hero__box hero__box--07'></div>
          <div className='hero__box hero__box--10' data-rotation='-50deg'></div>
        </figure>
      </div>
    </section>
  );
}
