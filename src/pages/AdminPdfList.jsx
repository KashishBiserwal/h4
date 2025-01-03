import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

export default function AdminPdfList() {
  const [ncert, setNcert] = useState([]);
  const [mcq, setMcq] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchPdfData() {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/pdfs", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setNcert(res.data.ncertPdfs);
      setMcq(res.data.mcqPdfs);
      setLoading(false);
    }
    fetchPdfData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-xl mb-4 mt-4">PDF LIST</h1>
      {/* {ncert?.map((item) => (
        
      ))} */}
    </div>
  );
}
