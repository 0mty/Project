import React from "react";

const Features = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full px-8 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-600 text-lg">
            Choose a course and start building your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">

            <div className="bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                  alt="team working"
                  className="w-full h-full object-cover"
                />
            </div>
            <p className="text-sm text-purple-600 mb-4 flex items-center gap-2">
                Beginner
            </p>
            <h3 className="text-xl font-bold mb-3">Frontend Basics</h3>
            <p className="text-gray-600">
              Learn HTML, CSS, JavaScript and React basics
            </p>
            <button className="bg-[#8b3dff] w-30 h-10 rounded-xl text-white px-4">
            Join Now
          </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">

            <div className="bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                  alt="team working"
                  className="w-full h-full object-cover"
                />
            </div>
            <p className="text-sm text-purple-600 mb-4 flex items-center gap-2">
                Intermediate
            </p>
            <h3 className="text-xl font-bold mb-3">UI Design Essentials</h3>
            <p className="text-gray-600">
                Understand layout, color, spacing and user experience.
            </p>
            <button className="bg-[#8b3dff] w-30 h-10 rounded-xl text-white px-4">
            Join Now
          </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">

            <div className="bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg text-white text-4xl">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                  alt="team working"
                  className="w-full h-full object-cover"
                />
            </div>
            <p className="text-sm text-purple-600 mb-4 flex items-center gap-2">
                All Levels
            </p>
            <h3 className="text-xl font-bold mb-3">Team Project Practice</h3>
            <p className="text-gray-600">
                Build small projects with your classmates step by step   
            </p>
            <button className="bg-[#8b3dff] w-30 h-10 rounded-xl text-white px-4">
            Join Now
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
