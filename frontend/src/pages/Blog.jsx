import React from "react";
import { blogs } from "../assets/data";
import Footer from "../component/Footer";

const Blog = () => {
  return (
    <div>
      <div className="bg-primary mb-16 pb-16">
        <div className="max-padd-container py-10">
          {/* CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12 pt-6">
            {blogs.map((blog) => (
              <div key={blog.title} className="relative">
                <img src={blog.image} alt="blogImg" className="rounded-xl" />
                {/* INFO */}
                <p className="medium-14 mt-6">{blog.category}</p>
                <h5 className="h5 pr-4 mb-1">{blog.title}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, magnam ratione.
                </p>
                <button className="underline mt-2 bold-14">
                  continue reading
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
