import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import axios from "axios";

export default function ChapterDetails() {
  const { className, subject, chapter } = useParams();
  const [pdfPath, setPdfPath] = React.useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ambitionstudies-server.vercel.app/pdfs/ncert/${className}/${
            subject.replace(/-/g, " ")
          }/${chapter.replace(/-/g, " ")}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPdfPath(response.data.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [className, subject]);

  const base64toBlob = (data) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr(
      "data:application/pdf;base64,".length
    );

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: "application/pdf" });
  };

  const blob = base64toBlob(pdfPath);
  const url = URL.createObjectURL(blob);

  return (
    <div className="w-full h-screen">
      <h1 className="text-center font-bold text-xl mb-4 mt-4">
        NCERT {subject} - Class {className}, {chapter}
      </h1>
      <div className="pdf-container border rounded shadow-md h-[80vh] overflow-y-auto">
       {url ? <Worker 
            workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={url} />
        </Worker> : "Loading..."}
      </div>
    </div>
  );
}