
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


// Logo
// Sign Up Login
// Home Products Solutions Pricing Contact
const Nav = () => {
  const [activeLink, setActiveLink] = useState(false);
  return (
    <div>
      <div className="bg-blue-100 shadow-sm p-2 flex justify-between items-center">

          <div className="w-10 h-10 text-purple-700 font-bold">
            EduSmart
          </div>
        <div className=" sm:hidden md:block">
          <div className="flex gap-3">
            <a href="#">Home</a>
            <a href="#">Course</a>
            <a href="">Teachers</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-4 sm:hidden">
          <button className="bg-white w-24 h-10 rounded-xl px-4">
            Sign Up
          </button>
          <button className="bg-[#8b3dff] w-24 h-10 rounded-xl text-white px-4">
            Login
          </button>
        </div>
                <div className="flex items-center">
          {activeLink ? (
            <HiX
              onClick={() => setActiveLink(!activeLink)}
              className="w-8 h-8 md:hidden"
            />
          ) : (
            <HiMenu
              onClick={() => setActiveLink(!activeLink)}
              className="w-8 h-8 md:hidden"
            />
          )}

        </div>
      </div>
      {activeLink && (
        <div className="md:hidden w-ful p-2 bg-blue-100 h-45 justify-items-start">
          <div className="flex flex-col gap-3  md:block">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="">Solution</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
