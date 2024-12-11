import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const chaptersData = {
  math: [
    {
      title: "Chapter 1. Rational Numbers",
      exercises: ["Exercise 1.1", "Exercise 1.2", "Exercise 1.3"],
    },
    {
      title: "Chapter 2. Linear Equations in One Variable",
      exercises: ["Exercise 2.1", "Exercise 2.2"],
    },
    {
      title: "Chapter 3. Understanding Quadrilaterals",
      exercises: ["Exercise 3.1", "Exercise 3.2", "Exercise 3.3"],
    },
    {
      title: "Chapter 4. Data Handling",
      exercises: ["Exercise 4.1", "Exercise 4.2"],
    },
  ],
  science: [
    {
      title: "Chapter 1. Food: Where Does It Come From?",
      exercises: ["Exercise 1.1", "Exercise 1.2"],
    },
  ],
};

export default function NCERTSolutions() {
  const { className, subject } = useParams();
  const navigate = useNavigate();

  const chapters = chaptersData[subject?.toLowerCase()] || [];

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
          {chapters.map((chapter) => (
            <li key={chapter.title} className="mb-4 list-none">
              <h3 className="font-semibold text-md text-[#510bdb]">
                {chapter.title}
              </h3>
              <ul className="list-disc pl-6">
                {chapter.exercises.map((exercise) => (
                  <li key={exercise} className="my-1 list-none">
                    <button
                      onClick={() =>
                        handleExerciseClick(chapter.title, exercise)
                      }
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      {exercise}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
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
