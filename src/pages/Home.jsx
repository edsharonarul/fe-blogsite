import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 Import animation

const Home = () => {
  const navigate = useNavigate();

  const handleStartBlog = () => {
    navigate("/bloglist");
  };

  return (
    <div className="bg-[#111] min-h-screen text-white flex flex-col items-center justify-center px-6 md:px-12 py-12 text-center w-full">

      {/* Hero Section */}
      <div className="max-w-3xl text-center mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Blog with the best</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          More bloggers and independent creators choose WordPress than any other blogging tool.
          Tap into intuitive, flexible tools that put writers, bloggers, and creators first.
        </p>
        <button
          onClick={handleStartBlog}
          className="bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-200"
        >
          Start a blog
        </button>
        <p className="text-gray-400 mt-4 text-sm">
          Get your free account now—just an email needed.
        </p>
      </div>

     
    </div>
  );
};

export default Home;
