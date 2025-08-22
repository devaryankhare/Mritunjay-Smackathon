// Home.jsx
import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Welcome to <span className="text-cyan-600">Jeevan-Setu</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-center leading-relaxed">
          Your comprehensive healthcare companion for modern wellness
        </p>
      </section>

      {/* Current Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-8 min-h-[80px] flex items-center justify-center">
            Current Features
          
          {/* <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-8 min-h-[80px] flex items-center justify-center"> */}
              <ReactTyped
                strings={[
                  ".",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop={true}
                showCursor={true}
                cursorChar="."
              />
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-[0_8px_25px_rgba(103,232,249,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-cyan-600 text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                  AI Diet Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized meal plans generated with AI, tailored to patient health
                  conditions and lifestyle needs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-[0_8px_25px_rgba(103,232,249,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-cyan-600 text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                  Govt. Sanitation Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enable government agencies to use anonymized health data to identify
                  patterns and improve sanitation in local communities.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-[0_8px_25px_rgba(103,232,249,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-cyan-600 text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                  Wearable Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with smartwatches and fitness trackers to keep
                  medical records updated with real-time health data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-8 min-h-[80px] flex items-center justify-center">
              Upcoming Features
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-8 min-h-[80px] flex items-center justify-center">
              <ReactTyped
                strings={[
                  
                  "AI Integration",
                  "Govt. Sanitation Insights",
                  "Wearable Integration",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop={true}
                showCursor={true}
                cursorChar="|"
              />
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exciting new capabilities coming soon to enhance your healthcare experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Upcoming Feature 1 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border-2  border-cyan-200 hover:border-cyan-300 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-200 rounded-lg flex items-center justify-center mb-4 opacity-70">
                  <span className="text-cyan-700 text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                  AI Diet Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized meal plans generated with AI, tailored to patient health conditions and lifestyle needs.
                </p>
              </div>
              <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>

            {/* Upcoming Feature 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border-2  border-cyan-200 hover:border-cyan-300 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-200 rounded-lg flex items-center justify-center mb-4 opacity-70">
                  <span className="text-cyan-700 text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                 Govt. Sanitation Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enable government agencies to use anonymized health data to identify patterns and improve sanitation in local communities.
                </p>
              </div>
              <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>

            {/* Upcoming Feature 3 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border-2  border-cyan-200 hover:border-cyan-300 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-cyan-200 rounded-lg flex items-center justify-center mb-4 opacity-70">
                  <span className="text-cyan-700 text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold text-cyan-800 mb-3">
                 Wearable Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with smartwatches and fitness trackers to keep medical records updated with real-time health data.
                </p>
              </div>
              <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Ready to transform your healthcare experience?
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}