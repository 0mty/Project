import React from "react";
import { services } from "../data/data";

const Service = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="w-full px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Future of suppport with new shape
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Discuss your goals, determine success metrics, identify problems
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full shrink-0"></div>
                <span className="text-gray-700">
                  UX design content strategy
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full shrink-0"></div>
                <span className="text-gray-700">Development bring</span>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-start mb-4 text-5xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 grow">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-blue-600 font-bold uppercase text-sm hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
