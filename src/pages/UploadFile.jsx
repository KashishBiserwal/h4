import React, { useState } from "react";
import axios from "axios";
// import '../css/UploadFile.css';
import Loading from "./Loading";

export default function UploadFile() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [exercise, setExercise] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("ncert"); 
  const [loading, setLoading] = useState(false);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); 
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    try {
      const base64File = await getBase64(file);

      const formData = {
        className,
        subject: subject.toLowerCase(),
        chapter: chapter.toLowerCase(),
        exercise,
        type,
        url: base64File, 
      };
      
      console.log(formData);

      setLoading(true);

      const response = await axios.post("https://ambitionstudies-server.vercel.app/addPdf", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(response.data.status === 'success') {
        setLoading(false);
        alert("File uploaded successfully!");
      }else {
        setLoading(false);
        alert("Error uploading file.");
        window.location.reload();
      }

    } catch (error) {
      console.error("Error uploading file", error);
      alert("Error uploading file.");
    }
  };

  if(loading){
    return <Loading />
  }

  return (
    <div className="flex justify-center text-black">
    <div className="w-[40vw] my-6 p-8 rounded-lg">
      <h2 className="text-2xl">Add PDF</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <p>Class Name</p>
          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)} 
            required
            className="text-black"
          >
            <option value="#">Select Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="form-group">
          <p>Subject</p>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)} 
            required
            className="text-black"
          >
            <option value="#">Select Subject</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="SST">SST</option>
          </select>
        </div>
        <div className="form-group">
          <p>Chapter</p>
          <input
            type="text"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            required
            className="text-black"
          />
        </div>
        {subject === "Math" && <div className="form-group">
          <p>Exercise</p>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="text-black"
          />
        </div>}
        <div className="form-group">
          <p>Type</p>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)} 
            required
            className="text-black"
          >
            <option value="#" disabled>Select Type</option>
            <option value="mcq">MCQ</option>
            <option value="ncert">NCERT</option>
          </select>
        </div>
        <div className="form-group">
          <p>File</p>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="text-black"
          />
        </div>
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
    </div>
  );
}
