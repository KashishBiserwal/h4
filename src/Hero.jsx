import React from "react";

const Hero = () => {
  return (
    <div className=" z-10 mt-6 sm:mt-12 ">
      <div className="p-4 sm:ml-20 grid sm:flex justify-around">
        <header className="py-8">
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
        <img src="images/hero.svg" alt="" className=" w-full sm:w-1/2 sm:-mt-8" />
      </div>

      <div className="bg-gray-200 text-sm shadow-md justify-center rounded-md p-6 mt-8 sm:mt-12 w-full px-4 sm:px-6 md:px-[200px]">
        <form className="flex flex-col sm:flex-row gap-4 md:gap-6 flex-wrap">
          <select
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto px-4"
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
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto px-4"
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
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto px-4"
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
            className="bg-purple-500 text-white p-3  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto rounded-ss-2xl rounded-bb-2xl rounded-br-2xl"
          >
            FIND SOLUTION
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
