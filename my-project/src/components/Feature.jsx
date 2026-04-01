import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-8 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help your business?
          </h2>
          <p className="text-gray-600 text-lg">
            When you resell besnik, you build trust and increase revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-500 w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-3">Real Analytics</h3>
            <p className="text-gray-600">
              Get detailed insights to understand your customers and grow
              smarter.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-500 w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
              🚀
            </div>
            <h3 className="text-xl font-semibold mb-3">Growth Strategy</h3>
            <p className="text-gray-600">
              Build scalable systems that increase leads and conversions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
            <p className="text-gray-600">
              Enterprise-grade infrastructure trusted by global companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
