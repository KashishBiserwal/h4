import React from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function ExerciseDetails() {
  const { className, subject, chapter, exercise } = useParams();

  // Map specific exercise to its PDF path
//   const pdfPaths = {
//     "8-maths-1": require("../assets/8-maths-1.pdf"),
//     "8-maths-2": require("../assets/8-maths-2.pdf"),
//     // Add more PDFs as required
//   };

//   const pdfPath =
//     pdfPaths[`${className}-${subject}-${chapter}-${exercise}`] ||
//     pdfPaths["8-maths-1"]; // Fallback PDF
const pdfPath = `https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf`;

  return (
    <div className="w-full h-screen">
      <h1 className="text-center font-bold text-xl mb-4 mt-4">
        NCERT {subject} - Class {className}, {chapter}, {exercise}
      </h1>
      <div className="pdf-container border rounded shadow-md">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={pdfPath} />
        </Worker>
      </div>
    </div>
  );
}
