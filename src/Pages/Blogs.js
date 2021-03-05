import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as svgs from "../Helpers/Svgs";
import { isNewPost, formatDate } from "../Helpers/Posts";
import Loader from "../Components/Loader";

import "../Styles/Blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [waiting, setWaiting] = useState(true);

  const getBlogs = (first_cb, second_cb) => {
    const blogs = require("../Content/Data/Blogs.json");
    first_cb(blogs, second_cb);
  };

  const setBlogsVal = (blogs, cb) => {
    setBlogs(blogs);
    setWaiting(false);
    cb();
  };

  const blogsAnimation = () => {
    // have to require here as importing at top breaks SSR
    // eslint-disable-next-line
    const ScrollReveal = require("scrollreveal").default;

    ScrollReveal().reveal(".blog-list a", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "bottom",
      interval: 75,
    });

    return () => ScrollReveal().destroy();
  };

  useEffect(() => {
    getBlogs(setBlogsVal, blogsAnimation);
  }, [blogs]);

  return waiting ? (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Loader />
    </div>
  ) : (
    <div className='blog-list'>
      {blogs.map((blog, idx) => {
        const title = blog.title || blog.slug;
        return (
          <Link to={`/blog/${blog.id}`} key={idx}>
            <article>
              <img src={svgs[blog.type]} alt={blog.type} />
              <div>
                <header>
                  <h1>{title}</h1>
                  <span>{formatDate(blog.date)}</span>
                </header>
              </div>
            </article>
            {isNewPost(blog.date) && (
              <span className='blog-list__new pill'>New!</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
