import React from "react";

const TiwariAcademySection = () => {
  return (
    <div>
      {/* <div className="text-center sm:px-16 section-1">
        <div className=" text-gray-200 z-10 w-2/3 mx-auto ">
          <h2 className="text-2xl md:text-3xl font-bold">Welcome To H4STUDY</h2>
          <p className="mt-4 leading-relaxed ">
            In the digital age, where countless resources vie for the attention
            of learners, H4STUDY stands out as a beacon of educational
            excellence. With its state-of-the-art website and Textbook Solutions
            Apps for iOS and Android, it has cemented its position as one of the
            premier destinations for students, educators, and curious minds
            alike. We are providing you the updated all Educational solutions
            up-to-date for session 2024-25.
          </p>
        </div>
      </div> */}

      <div className="mt-12 flex flex-wrap gap-8 justify-center z-10">
        {/* Free Online Support */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 w-80">
          <div className="flex justify-center">
            <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
              {/* Icon (replace with an SVG or image) */}
              <span className="text-xl font-bold">★</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mt-4">
            FREE ONLINE SUPPORT
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            The intuitiveness of H4STUDY's digital platforms is commendable. Its user-centric interface ensure that users can
            navigate with ease, making the learning experience seamless and
            enjoyable.
          </p>
        </div>

        {/* Free Education */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 w-80">
          <div className="flex justify-center">
            <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
              {/* Icon (replace with an SVG or image) */}
              <span className="text-xl font-bold">★</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mt-4">FREE EDUCATION</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Spanning a plethora of subjects and grades, the
            platform ensures that learners of all backgrounds and proficiency
            find materials tailored to their needs.
          </p>
        </div>

        {/* Improving Quality */}
        <div className="bg-white text-black rounded-lg shadow-md p-6 w-80">
          <div className="flex justify-center">
            <div className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
              {/* Icon (replace with an SVG or image) */}
              <span className="text-xl font-bold">★</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-center mt-4">
            IMPROVING QUALITY
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            You can Download Books, solutions and study material in PDF format. Behind the screens of this
            educational titan is a team of dedicated professionals and educators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TiwariAcademySection;
