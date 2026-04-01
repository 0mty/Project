import React from "react";
import ScheduleImage from "../assets/Schedule.png";

const Schedule = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-full flex flex-col md:flex-row items-center">
        {/* LEFT - Image stretches to center */}
        <div className="hidden md:flex w-full md:w-1/2 justify-end pr-10 lg:pr-16">
          <img
            src={ScheduleImage}
            alt="Schedule Desktop"
            className="w-full max-w-lg object-contain"
          />
        </div>

        {/* Mobile Image */}
        <div className="flex md:hidden w-full justify-center px-8 mb-8">
          <img
            src={ScheduleImage}
            alt="Schedule Mobile"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* RIGHT - Text pushed to right edge with padding only on the right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-10 lg:pl-16 pr-8 lg:pr-20 py-8">
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">
            Schedule
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Streamline Your Business With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-6">
            Take control of your time boost productivity with our intelligent
            scheduling system. Automate appointments, manage team availability,
            and deliver exceptional customer experience through seamless
            calendar management.
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold flex items-center gap-1 hover:underline w-fit"
          >
            Explore scheduling features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
