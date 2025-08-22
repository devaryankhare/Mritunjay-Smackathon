// Home.jsx
import React from "react";
import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-cyan-600">Jeevan-Setu</span>
        </h1>
        <br />
        <br />
        <br />
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-6">
          <ReactTyped
            strings={[
              "Upcoming Features",
              "AI Integration",
              "Govt. Sanitation Insights",
              " Wearable Integration",
            ]}
            typeSpeed={100}   // typing speed
            backSpeed={60}    // deleting speed
            loop={true}       // keep repeating
            showCursor={true} // show blinking cursor
            cursorChar="|"    // customize cursor
          />
        </h2>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_4px_10px_#67e8f9] transition aspect-square flex flex-col justify-center">
          <h2 className="text-xl text-cyan-800 font-semibold mt-1 mb-8"> AI Diet Planning</h2>
          <p className="text-gray-600">
            Personalized meal plans generated with AI, tailored to patient health
            conditions and lifestyle needs.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_4px_10px_#67e8f9] transition aspect-square flex flex-col justify-center">
          <h2 className="text-xl text-cyan-800 font-semibold mt-1 mb-8"> Govt. Sanitation Insights</h2>
          <p className="text-gray-600">
            Enable government agencies to use anonymized health data to identify
            patterns and improve sanitation in local communities.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-[0_4px_10px_#67e8f9] transition aspect-square flex flex-col justify-center">
          <h2 className="text-xl text-cyan-800 font-semibold mt-1 mb-8"> Wearable Integration</h2>
          <p className="text-gray-600">
            Seamless integration with smartwatches and fitness trackers to keep
            medical records updated with real-time health data.
          </p>
        </div>
      </section>
    </div>
  );
}
