// Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-cyan-600">MyWebsite</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A simple React + Tailwind starter home page.
        </p>
        <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_4px_10px_#67e8f9] transition">
          <h2 className="text-xl font-semibold mb-2">🚀 Fast</h2>
          <p className="text-gray-600">Optimized performance with React + Tailwind.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_4px_10px_#67e8f9] transition">
          <h2 className="text-xl font-semibold mb-2">🎨 Modern</h2>
          <p className="text-gray-600">Clean and modern UI design out of the box.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_4px_10px_#67e8f9] transition">
          <h2 className="text-xl font-semibold mb-2">⚡ Easy</h2>
          <p className="text-gray-600">Simple structure to get started quickly.</p>
        </div>
      </section>
    </div>
  );
}
