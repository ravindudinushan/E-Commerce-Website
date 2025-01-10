import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <section className="max-padd-container mt-16">
      {/* CONTAINER */}
      <div className="max-padd-container flexBetween flex-wrap gap-8 rounded-2xl">
        <div className="flexCenter gap-x-3">
          <RiMoneyDollarCircleLine className="text-3xl " />
          <div>
            <h4 className="medium-15">MONEY-BACK GUARANTEE</h4>
            <p>100% refund guaranteed if you're not satisfied.</p>
          </div>
        </div>
        <div className="flexCenter gap-x-3">
          <TbTruckDelivery className="text-3xl " />
          <div>
            <h4 className="medium-15">FREE SHIPING & RETURNS</h4>
            <p>Free shiping available on all orders above $99.</p>
          </div>
        </div>
        <div className="flexCenter gap-x-3">
          <BiSupport className="text-3xl " />
          <div>
            <h4 className="medium-15">24/7 ONLINE SUPPORT</h4>
            <p>Our team is here to assist you round the clock.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
