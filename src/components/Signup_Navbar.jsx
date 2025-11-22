import React from "react";
import { NavLink } from "react-router-dom";

const Signup_Navbar = () => {

  return (
    <>
      <div className="navbar flex flex-row  items-center justify-around pt-4 gap-20">
        <NavLink to="/">
          <div className="ml-20">RapidResQ</div>
        </NavLink>
        <div className="flex flex-row items-center justify-between gap-50">
          <div className="flex gap-5">
            <NavLink to = "/login"><button className="h-10 w-20 border  bg-[#e64848]  border-[#000000] rounded-sm">
              Login
            </button></NavLink>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup_Navbar;