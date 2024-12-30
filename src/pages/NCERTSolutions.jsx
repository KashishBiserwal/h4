import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NCERTSolutions() {
  const { className, subject } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ambitionstudies-server.vercel.app/ncertClassSubChapters/${className}/${subject}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data fetched:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [className, subject]);


  const handleExerciseClick = (chapterTitle, exercise) => {
    const formattedChapter = chapterTitle
      .toLowerCase()
      .replace(/chapter \d+\./, "")
      .trim()
      .replace(/\s+/g, "-");
    const formattedExercise = exercise
      .toLowerCase()
      .replace(/exercise /, "")
      .trim();
    navigate(
      `/ncert/${className}/${subject}/${formattedChapter}/${formattedExercise}`
    );
  };

  const handleChapterClick = (chapterTitle) => {
    const formattedChapter = chapterTitle
      .toLowerCase()
      .replace(/chapter \d+\./, "")
      .trim()
      .replace(/\s+/g, "-");
    navigate(`/ncert/${className}/${subject}/${formattedChapter}`);
  }

  return (
    <div>
      <div
        id="banner"
        className="flex justify-center font-bold text-2xl text-white p-6"
        style={{
          background: "linear-gradient(to right, #ff9966, #ff5e62)",
        }}
      >
        NCERT Solutions for Class {className} {subject}
      </div>
      <div className="w-[50vw] mx-20">
        <p className="text-xs my-8">
          NCERT Solutions for Class {className} {subject} provide step-by-step
          explanations to simplify complex concepts. These resources are
          invaluable for students aiming to excel in their studies, covering all
          chapters and exercises in detail.
        </p>
        <h2 className="font-bold text-2xl mb-4">
          Chapter-wise Class {className} {subject} Solutions
        </h2>
        <ul className="list-disc pl-6">
          {subject === "math" ? 
            data?.map((chapter) => (
              <li key={chapter.chapter} className="mb-4 list-none">
                <h3 className="font-semibold text-md text-[#510bdb]">
                  {chapter.chapter}
                </h3>
                  <ul className="list-disc pl-6">
                    <li className="my-1 list-none"> 
                      <button
                        onClick={() => handleExerciseClick(chapter.chapter, chapter.exercise)}
                        className="text-blue-500 underline hover:text-blue-700"
                      >
                        {chapter.exercise}
                      </button>
                    </li>
                  </ul>
              </li>
            ))
           : (
            data?.map((chapter) => (
              <li key={chapter} className="mb-4 list-none">
                <h3 className="font-semibold text-md text-[#510bdb]" onClick={() => handleChapterClick(chapter)}>
                  {chapter}
                </h3>
              </li>
            ))
          )}
        </ul>
        <p className="text-xs my-8">
          For effective preparation, NCERT Class {className} Math sample papers and CBSE
          Class {className} Maths previous year papers offer insights into question
          patterns and frequently asked questions. To cater to diverse learning
          needs, platforms offer Class {className} NCERT Mathematics Textbook video
          lectures, Class {className} Math Book online tests and {className}th Maths interactive
          quizzes that make studying engaging and accessible. Students can also
          benefit from Class {className} NCERT Maths doubt-clearing sessions and CBSE
          Class {className} Math online classes to resolve queries in real-time. With
          these extensive resources, mastering topics like algebra, geometry and
          data handling becomes achievable, setting a strong base for future
          academic success.
        </p>
      </div>
    </div>
  );
}
