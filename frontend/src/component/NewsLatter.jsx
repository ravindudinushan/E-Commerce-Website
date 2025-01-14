import React from "react";
import { FaDribbble, FaFaacebookF, FaInstagram } from "react-icons/fa6";

const NewsLatter = () => {
  return (
    <section className="max-padd-container border-t-[1px] border-b-[1px] border-primary py-4">
      <div className="flexBetween">
        <div>
          <h4>Subscribe newsletter</h4>
          <p>Get latest infromation on Events, Sales & Offers.</p>
        </div>
        <div>
          <div>
            <input type="email" placeholder="Email Address" className=""/>
            <button>Submit</button>
          </div>z
        </div>
        <div>
            <div><FaFaacebookF /></div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
