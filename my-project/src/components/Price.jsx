import React, { useState } from "react";
import { pricing } from "../data/data";

const Price = () => {
  const [months, setMonths] = useState(3);

  return (
    <section className="w-full bg-white py-24">
      <div className="w-full px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-center mb-16">Pricing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-12 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                {plan.plan}
              </h3>
              <p className="text-5xl font-bold text-gray-900">
                ${plan.price * months}
                <span className="text-xl text-gray-600 font-normal">
                  /{months} {months === 1 ? "month" : "months"}
                </span>
              </p>
              <p className="text-gray-500 text-sm mt-2">${plan.price}/month</p>
            </div>
          ))}
        </div>

        {/* Slider Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-12">
            <label className="block text-gray-700 font-semibold mb-4">
              Select Duration
            </label>
            <div className="flex justify-center items-center gap-6">
              <input
                type="range"
                min="1"
                max="50"
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-96 h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <span className="text-3xl font-bold text-blue-600 min-w-20">
                {months} mo
              </span>
            </div>
          </div>

          <p className="text-2xl text-gray-700 mb-8">Ready get started?</p>
          <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;
