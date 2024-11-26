import React from "react";
import { ComplexNavbar } from "./Navbar";
import Hero from "./Hero";
import TiwariAcademySection from "./TiwariAcademySection";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <Hero />
      <TiwariAcademySection />
      <div className="bg-white py-6 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm text-gray-500 uppercase font-medium">
            # Guaranteed Success
          </p>
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Our Achievements
          </h2>
          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 text-gray-800">
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
    </>
  );
}
