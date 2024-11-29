import React from "react";
import { ComplexNavbar } from "./Navbar";
import Hero from "./Hero";
import TiwariAcademySection from "./TiwariAcademySection";
import { Button } from "@material-tailwind/react";
import Achivements from "./Achivements";

export default function Home() {
  return (
    <>
      <Hero />
      <TiwariAcademySection />
      <section id="class" className="mx-8 mt-12">
        <h2 className="font-bold text-3xl text-center mb-8">Class</h2>
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
          <a href="#">
            <div className=" py-4 px-8 bg-red-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">XII</h1>
              <p>Class 12</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-yellow-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">XI</h1>
              <p>Class 11</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-blue-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">X</h1>
              <p>Class 10</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-purple-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">IX</h1>
              <p>Class 9</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-red-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">VIII</h1>
              <p>Class 8</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-yellow-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">VII</h1>
              <p>Class 7</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-blue-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">VI</h1>
              <p>Class 6</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-purple-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">V</h1>
              <p>Class 5</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-red-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">IV</h1>
              <p>Class 4</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-yellow-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">III</h1>
              <p>Class 3</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-blue-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">II</h1>
              <p>Class 2</p>
            </div>
          </a>
          <a href="#">
            <div className=" py-4 px-8 bg-purple-100 rounded-xl text-center">
              <h1 className="font-extrabold text-2xl mb-2">I</h1>
              <p>Class 1</p>
            </div>
          </a>
        </div>
      </section>
      <Achivements />
      <Olympiad />
    </>
  );
}

const Olympiad = () => {
  return (
    <div className="bg-purple-300 text-center text-white p-8">
      <h2 className="text-2xl mb-4 font-bold">Olympiad Sample Papers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 10</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 9</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 8</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 7</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 6</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 5</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 4</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 3</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 2</p>
          </div>
        </a>
        <a href="">
          <div className="bg-purple-700 rounded-xl py-2">
            <p>Class 1</p>
          </div>
        </a>
      </div>
    </div>
  );
};
