import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-row  items-center justify-around pt-4 gap-20">
        <NavLink to="/">
          <div className="ml-20">RapidResQ</div>
        </NavLink>
        <div className="flex flex-row items-center justify-between gap-50">
          {/* //Navigation Links */}
          <div> 
            <ul className="flex flex-row gap-10">
              <NavLink to="/how-it-works">
                <li>How it works</li>
              </NavLink>
              <NavLink to="/Features">
                <li>Features</li>
              </NavLink>
            </ul>
          </div> 
          {/* navigation links */}
          <div className="flex gap-5">
            <NavLink to = "/signup"><button className="h-10 w-20 border  bg-[#e64848]  border-[#000000] rounded-sm">
              Signup
            </button></NavLink>
           <NavLink to = "/login" ><button  className="h-10 w-20 borderborder-[#000000] rounded-sm">Login</button> </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
