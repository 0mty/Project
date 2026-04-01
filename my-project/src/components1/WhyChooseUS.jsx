import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-8 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            We help students learn with confidence
         </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-3">Easy Lessons</h3>
            <p className="text-gray-600">
   Simple and clear lessons for students who are just starting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className=" w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
              🚀
            </div>
            <h3 className="text-xl font-semibold mb-3">Friendly Teachers</h3>
            <p className="text-gray-600">
Supportive teachers who explain step by step.            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className=" w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-3">Practice Projects</h3>
            <p className="text-gray-600">
Students build real small projects after each lesson.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
