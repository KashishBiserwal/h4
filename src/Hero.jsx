import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 z-10 mt-[50px]">
      <div className=" ml-[200px]">
        <header className=" py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700">
            FIND CBSE & NCERT
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-500">
            FREE SOLUTIONS
          </h1>
          <p className="text-gray-600 mt-2">
            FOR CLASS NURSERY-12 SESSION 2024-25
          </p>
        </header>

        <div className="flex items-center gap-4 mt-4">
          <p className="text-gray-600">Download App Now</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12 cursor-pointer"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12 cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-gray-200 text-sm shadow-md justify-center rounded-md p-6 mt-20 w-full px-[200px] ">
        <form className="flex gap-4">
          <select
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Your Class
            </option>
            <option>Nursery</option>
            <option>1</option>
            <option>2</option>
            {/* Add other class options */}
          </select>

          <select
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            {/* Add other subjects */}
          </select>

          <select
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Chapter
            </option>
            <option>Chapter 1</option>
            <option>Chapter 2</option>
            <option>Chapter 3</option>
            {/* Add other chapters */}
          </select>

          <button
            type="submit"
            className="bg-purple-500 text-white p-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-auto"
          >
            FIND SOLUTION
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
