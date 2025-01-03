import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import axios from 'axios';

export default function Newz() {
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchNews(){
      setLoading(true)
        const res = await axios.get('http://localhost:5000/getNews', {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        setNewsData(res.data.news)
        setLoading(false)
    }
    fetchNews()
  }, []);

  if (loading) {
      return <Loading />
  }

  return (
    <div className="min-h-[50vh] px-10 mb-10">
      <h1 className="font-bold uppercase my-8 text-2xl text-center">
        Educational News
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {newsData.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="font-bold text-lg text-blue-600">{item.title}</h2>
            <p className="text-gray-700 mt-2">{item.content}</p>
            <p className="text-sm text-gray-400 mt-4">
              Published on: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
