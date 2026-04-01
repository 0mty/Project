import React from "react";
import MonitorImage from "../assets/Monitor.png";

const Monitor = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-full flex flex-col md:flex-row items-start justify-start">
        {/* LEFT - Text pushed to left edge with padding only on the left */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start pl-8 lg:pl-20 pr-10 lg:pr-16 py-8 order-2 md:order-1">
          <p className="text-sm font-bold text-green-700 uppercase tracking-widest mb-3">
            Monitor
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6">
            Before the ship is really back. Round, round, all round the world.
            Round all around the world. Round all around the world.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold flex items-center gap-1 hover:underline w-fit"
          >
            Learn more about monitoring →
          </a>
        </div>

        {/* RIGHT - Image stretches to center */}
        <div className="hidden md:flex w-full md:w-1/2 justify-start pl-10 lg:pl-16 order-1 md:order-2">
          <img
            src={MonitorImage}
            alt="Monitor Desktop"
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* Mobile Image */}
        <div className="flex md:hidden w-full justify-center px-8 mb-8 order-1">
          <img
            src={MonitorImage}
            alt="Monitor Mobile"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Monitor;
