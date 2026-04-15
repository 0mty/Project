import React from "react";
import { dishes } from "./data";

const MenuSection = () => {
  return (
    <section id="menu" className="bg-white px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Popular Menu
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Discover our most loved dishes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fff8f0] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-64 overflow-hidden rounded-t-[2rem] bg-slate-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {dish.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-orange-500">
                    {dish.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
