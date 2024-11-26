import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Layout";
import Home from "./Home";
import Tests from "./pages/Tests";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tests" element={<Tests />}/>
          <Route path="gallery" element={<Gallery />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
