"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const videoFiles = [
  { fileName: "poem1.mp4", title: "The Dawn", author: "Emily Carter" },
  { fileName: "poem2.mp4", title: "Whispers of the Night", author: "Nathan Hale" },
  { fileName: "poem3.mp4", title: "Eternal Echoes", author: "Sophia Bennett" },
  { fileName: "poem4.mp4", title: "The Lost Path", author: "Liam Thompson" },
  { fileName: "poem5.mp4", title: "Silent Shadows", author: "Olivia Harper" },
  { fileName: "poem6.mp4", title: "Golden Horizons", author: "Aiden Collins" },
];

function SimpleCarousel() {
  const splideOptions = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    rewind: true,
    pagination: false,
  };

  return (
    <div className="relative w-screen flex items-center justify-center bg-stone-200">
      <div className="w-1/2">
        {videoFiles.map((video, index) => (
          <div
            className="flex flex-col items-center justify-center mt-10 mb-10"
            key={video.fileName}
          >
            <video width="40%" height="auto" controls>
              <source src={`/videos/${video.fileName}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-600">By {video.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleCarousel;
