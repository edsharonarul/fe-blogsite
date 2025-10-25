import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About This Blog</h1>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-600">TechTales Blog</span> — your daily source for modern web
        development insights, coding tutorials, and the latest trends in technology.
      </p>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        This platform was created by <span className="font-semibold">Heisen Berg</span> to help students and developers
        explore concepts in <strong>ReactJS</strong>, <strong>JavaScript</strong>, <strong>AI</strong>, and
        <strong> Full-Stack Web Development</strong> through simple, practical explanations.
      </p>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        Whether you’re a beginner learning to build your first app or a professional looking to stay updated with the
        latest tools, this blog provides concise, real-world content to strengthen your technical skills and inspire
        your next big project.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed">
        Stay connected, keep experimenting, and continue your journey in tech with us. 🚀
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          To make technology education accessible and engaging for everyone. We believe in learning by doing —
          simplifying complex tech concepts into actionable, easy-to-understand content.
        </p>
      </div>
    </section>
  );
};

export default About;