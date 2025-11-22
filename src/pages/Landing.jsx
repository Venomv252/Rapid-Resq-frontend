import React from "react";
import "./landing.css";
import { NavLink } from "react-router-dom";
import Line from "../components/line";

const Landing = () => {
  return (
    <>
    <Line/>
    <div className="landing m-10">
      <div className="hero bg-[#0A1120] h-[450px] w-full flex flex-col items-center justify-center text-white px-4">
        
        <div className="text-5xl text-center font-bold">Smarter Emergency</div>
        <div className="text-5xl text-center font-bold">Response. Instantly.</div>

        <span className="text-center text-gray-300 max-w-xl mt-4">
          Automatically detecting accidents, assessing severity, and dispatching aid in real-time.
        </span>

        <div>
          <NavLink to="/signup">
            <button className="h-10 w-32 bg-[#e64848] text-white rounded-sm mt-6">
              Get Started
            </button>
          </NavLink>
        </div>

      </div>
    </div>
    </>
  );
};

export default Landing;
