// About.jsx
import React from "react";

export default function About() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-6">
      {/* About Section */}
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="font-semibold">MyWebsite</span>!  
          We’re dedicated to building simple and modern web applications using 
          the latest technologies like <span className="font-semibold">React</span> 
          and <span className="font-semibold">Tailwind CSS</span>.  
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to make development easier for beginners by providing 
          clean and reusable UI components, so you can focus on creating 
          amazing projects.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </section>
    </div>
  );
}
