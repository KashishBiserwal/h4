import React from "react";

export default function Achivements() {
  return (
    <div className="bg-gray-800 rounded-ss-[50px] rounded-br-[50px]  my-12 mx-8 py-6  text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-sm  uppercase font-medium"># Guaranteed Success</p>
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Our Achievements
        </h2>
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 ">
          <div>
            <p className="text-md font-semibold">Nursery - 12</p>
            <p className="text-sm mt-1">Classes</p>
          </div>
          <div>
            <p className="text-md font-semibold">1000+</p>
            <p className="text-sm mt-1">Tutorial Exercise</p>
          </div>
          <div>
            <p className="text-md font-semibold">220K</p>
            <p className="text-sm mt-1">PDF Download</p>
          </div>
          <div>
            <p className="text-md font-semibold">6.9M</p>
            <p className="text-sm mt-1">Happy Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}
