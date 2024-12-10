"use client"
import React, { useEffect, useState } from "react";
import poemsdb from "../db/written.json"
const PoemList = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    console.log(poemsdb.poems)
    setPoems(poemsdb.poems)
      
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {poems.map((poem, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden border hover:scale-105 transform transition-all duration-300"
        >
          <img
            src={poem.image}
            alt={poem.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {poem.title}
            </h2>
            <p className="text-gray-600 italic mb-4">by {poem.author}</p>
            <p className="text-gray-700">{poem.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoemList;
