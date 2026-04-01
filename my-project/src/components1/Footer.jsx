import React from "react";


const Footer = () => {
  return (
    <footer className="w-full  bg-purple-600 text-white h-40">
    <div className = "w-full px-8 lg:px-20">
      <div className="h-40 flex justify-between items-center">
        <div className="flex flex-col items-start">
          <div className="w-10 h-10 font-bold">
            EduSmart
          </div>          <div className ="h-10">Learn simply. Build confidently</div>

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
      </div>
        <div className="md:hidden p-2 bg-white-100 w-50">
          <div className="flex flex-col gap-3  md:block">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="">Solution</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
