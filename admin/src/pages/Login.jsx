import React from "react";
import login from "../assets/loginImg.png";

const Login = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* CONTAINER */}
      <div className="flex h-full w-full">
        {/* IMAGE SIDE */}
        <div className="w-1/2 hidden sm:block">
          <img src={login} alt="" className="object-cover h-full w-full" />
        </div>
        {/* FORM SIDE */}
        <div className="flexCenter w-full sm:w-1/2">
          <form action="" className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800">
            <div className="w-full mb-4">
              <h3 className="bold-36">Login</h3>
            </div>
            <div className="w-full">
              <label htmlFor="email" className="medium-15">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <button type="submit" className="btn-dark w-full mt-5 !py-[9px]">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
