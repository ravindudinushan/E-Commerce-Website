import React from "react";
import Title from "../component/Title";
import CartTotal from "./CartTotal";

const PlaceOrder = () => {
  return (
    <div>
      <div>
        {/* CONTAINER */}
        <form action="">
          <div>
            {/* LEFT SIDE */}
            <div>
              <Title title1={"Delivery"} title2={"Infromation"} />
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <input
                type="text"
                placeholder="Email Address"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <input
                type="text"
                placeholder="street"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
              />
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
              <div>
              <input
                  type="text"
                  placeholder="Zip Code"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div>
                <CartTotal />
                {/* PAYMENT METHOD */}
                <div>
                    <h3>Payment <span>Method</span></h3>
                    <div>
                        <div>Stripe</div>
                        <div>Cash on Delivery</div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn-secondary">Place Order</button>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
