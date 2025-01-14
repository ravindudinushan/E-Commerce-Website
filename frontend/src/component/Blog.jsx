import React from "react";
import { blogs } from "../assets/data";

const Blog = () => {
  return (
    <section className="max-padd-container pb-16">
      {/* CONTAINER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {blogs.slice(0, 4).map((blog) => (
          <div key={blog.title} className="relative">
            <img src={blog.image} alt="blogImg" className="rounded-xl" />
            {/* INFO */}
            <p className="medium-14 mt-6">{blog.category}</p>
            <h5 className="h5 pr-4 mb-1">{blog.title}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              magnam ratione.
            </p>
            <button className="underline mt-2 bold-14">continue reading</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
