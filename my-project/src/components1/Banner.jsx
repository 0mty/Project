import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden flex">
        <div className="flex flex-col lg:flex-row w-full">
          {/* LEFT SIDE - exactly 50% */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16 py-20 bg-white">
            <div className="max-w-xl w-full">
              <p className="text-sm text-purple-600 mb-4 flex items-center gap-2">
                Start learning today
              </p>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Improve your skills with online course{" "}
                {/* <span className="text-blue-600">Startup to Fortune 500</span>{" "}
                Companies <span className="text-red-500">📍</span> */}
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                Learn programming, design and teamwork with simple projects and clear lessons for beginners. ––– 
              </p>

              <div className="flex w-full max-w-md">
                {/* <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="px-6 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition">
                  →
                </button> */}
                <button className="bg-[#8b3dff] w-40 h-15 rounded-xl text-white px-4">
                    Get Started
                </button>
                <button className="bg-white w-40 h-15 rounded-xl px-4">
                    View Courses
                </button>


              </div>
            </div>
          </div>

          {/* RIGHT SIDE - exactly 50%, full height */}
          <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center bg-gray-50 px-8 py-20">
            <div className="flex gap-6 h-[80vh] max-h-150">
              {/* Image 1 */}
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                  alt="team working"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 (middle taller) */}
              <div className="flex-1 rounded-2xl overflow-hidden shadow-xl mt-8 mb-0">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093"
                  alt="planning"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="discussion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}


export default Hero;
