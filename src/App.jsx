import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Layout";
import Home from "./Home";
import Tests from "./pages/Tests";
import Gallery from "./pages/Gallery";
import NCERTSolutions from "./pages/NCERTSolutions";
import ExerciseDetails from "./pages/ExerciseDetails";
import MCQExercises from "./pages/MCQExercises";
import Newz from "./pages/Newz";
import UploadFile from "./pages/UploadFile";
import ChapterDetails from "./pages/ChapterDetails";
import UploadNews from "./pages/uploadNews";
import Login from "./pages/Login";
import AdminPdfList from "./pages/AdminPdfList";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="tests" element={<Tests />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="news" element={<Newz />}/>
          <Route path="uploadFile" element={<UploadFile />}/>
          <Route path="addNews" element={<UploadNews />}/>
          <Route path="managePdfs" element={<AdminPdfList />}/>
          <Route path="ncert/:className/:subject" element={<NCERTSolutions />}/>
          <Route path="ncert/:className/:subject/:chapter" element={<ChapterDetails />} />
          <Route path="ncert/:className/:subject/:chapter/:exercise" element={<ExerciseDetails />} />
          <Route path="mcqs/:formattedClass/:formattedSubject/:chapter" element={<MCQExercises />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
