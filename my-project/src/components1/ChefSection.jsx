import React from "react";
import { cheffInfo } from "./data";

const ChefSection = () => {
  const chef = cheffInfo[0];
  return (
    <section id="about" className="bg-[#fff7ed] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(255,148,0,0.12)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Meet the chef
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              {chef.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {chef.description}
            </p>
            <button className="mt-8 inline-flex rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
            <img
              src={chef.image}
              alt="Chef"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
