import React from "react";
import { heroData } from "./data";

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#fff7ed] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            {heroData.preheading}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {heroData.heading}
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {heroData.subtitle}
          </p>
          <div className="flex flex-row gap-3">
            <a
              href={heroData.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-200 transition hover:bg-orange-600"
            >
              {heroData.primaryCta.label}
            </a>
            <a
              href={heroData.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              {heroData.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(255,148,0,0.15)]">
            <img
              src={heroData.image}
              alt="Restaurant interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
