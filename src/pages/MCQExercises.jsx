import React from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function MCQExercises() {
  const { formattedClass, formattedSubject, chapter } = useParams();
  const pdfPath = `https://files.edgestore.dev/s2yin67n9856b63j/publicFiles/_public/113a3539-4963-40a9-93f9-2f0e0f2a6591.pdf`;

  return (
    <div className="w-full h-screen">
      <h1 className="text-center font-bold text-xl mb-4 mt-4">
        MCQ {formattedSubject} - Class {formattedClass}, {chapter}
      </h1>
      <div className="pdf-container border rounded shadow-md h-[80vh] overflow-y-auto">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={pdfPath} />
        </Worker>
      </div>
    </div>
  );
}
