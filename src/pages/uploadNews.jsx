import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

export default function UploadNews() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [newsData, setNewsData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/addNews",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "success") {
        setLoading(false);
        alert("News uploaded successfully!");
        window.location.reload()
      } else {
        setLoading(false);
        alert("Error uploading news.");
        // window.location.reload();
      }
    } catch (error) {
      console.error("Error uploading news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    async function fetchNews(){
        const res = await axios.get('http://localhost:5000/getNews', {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        setNewsData(res.data.news)
    }
    fetchNews()
  }, []);

  async function handleDelete(id){
    const res = await axios.delete(`http://localhost:5000/news/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
    })
    if(res.data.status === "success"){
        window.location.reload();
    }else{
        alert('Error deleting news. Try Again')
    }
    }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="font-bold uppercase my-8 text-2xl text-center">
        Upload News
      </h1>
      <div className="flex justify-center">
        <form
          className="w-[40vw] my-6 p-8 rounded-lg grid bg-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <p>News Title</p>
            <input
              required
              type="text"
              value={title}
              name="title"
              className="text-black bg-white"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <p>Content</p>
            <textarea
              required
              value={content}
              className="text-black p-2"
              name="content"
              rows={5}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>


      <div className="mt-8 mb-4 mx-4">
        <h1 className="flex justify-center text-xl font-bold">All News</h1>
        <div className="news-list grid grid-cols-2 gap-4">
          {newsData.map((item) => (
            <div
              key={item._id}
              className="news-item my-4 p-4 border rounded-lg shadow-md"
            >

              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-gray-800">{item.content.slice(0, 80)}...</p>
              <p className="text-sm text-gray-400">
                Published on: {new Date(item.createdAt).toLocaleString()}
              </p>
              <button className="bg-red-700 text-white text-xs px-2 py-1 rounded-md mt-2" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
