"use client";
import React, { useState } from "react";

function PostForm() {
  const [postType, setPostType] = useState("write"); // Default to 'Write Post'
  const [writeDetails, setWriteDetails] = useState({
    title: "",
    body: "",
    author: "",
    imagePath: "",
  });
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    videoFile: null,
  });

  const handleWriteChange = (e) => {
    const { name, value } = e.target;
    setWriteDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleVideoDetailsChange = (e) => {
    const { name, value } = e.target;
    setVideoDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setVideoDetails((prevDetails) => ({ ...prevDetails, videoFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postType === "write") {
      alert(`Submitted: Text Post - ${JSON.stringify(writeDetails)}`);
    } else if (postType === "video") {
      alert(`Submitted: Video Post - ${JSON.stringify(videoDetails)}`);
    }
  };

  return (
    <div className="w-[1000px] flex flex-col items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-4">Create a Post</h2>

        {/* Post Type Selection */}
        <div className="flex mb-6">
          <button
            className={`w-full px-4 py-2 rounded-l-lg ${
              postType === "write" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPostType("write")}
          >
            Write Post
          </button>
          <button
            className={`w-full px-4 py-2 rounded-r-lg ${
              postType === "video" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setPostType("video")}
          >
            Video Post
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {postType === "write" ? (
            <div>
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={writeDetails.title}
                  onChange={handleWriteChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter post title"
                  required
                />
              </div>

              {/* Body */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Body</label>
                <textarea
                  name="body"
                  value={writeDetails.body}
                  onChange={handleWriteChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter post body"
                  rows={5}
                  required
                ></textarea>
              </div>

              {/* Author */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={writeDetails.author}
                  onChange={handleWriteChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter author name"
                  required
                />
              </div>

              {/* Image Path */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Image Path
                </label>
                <input
                  type="text"
                  name="imagePath"
                  value={writeDetails.imagePath}
                  onChange={handleWriteChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter image path or URL"
                  required
                />
              </div>
            </div>
          ) : (
            <div>
              {/* Video Title */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={videoDetails.title}
                  onChange={handleVideoDetailsChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter video title"
                  required
                />
              </div>

              {/* Video Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={videoDetails.description}
                  onChange={handleVideoDetailsChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter video description"
                  rows={3}
                  required
                ></textarea>
              </div>

              {/* Video File Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Upload Video
                </label>
                <input
                  type="file"
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={handleFileUpload}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
