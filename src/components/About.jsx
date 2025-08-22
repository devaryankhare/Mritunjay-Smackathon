import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">
          About <span className="text-cyan-600">Jeevan-Setu</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Jeevan-Setu is a smart healthcare platform designed to save lives in
          emergencies by providing instant access to a patient’s medical history,
          medications, allergies, and emergency contacts through a secure QR-code
          system.
        </p>
      </div>

      {/* Mission / Vision */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-cyan-600">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            To empower patients and protect lives by making critical medical
            information instantly available when it matters the most — in
            emergencies.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-cyan-600">Our Vision</h2>
          <p className="mt-4 text-gray-600">
            A world where no patient’s health is at risk due to missing
            information, and where every second saved means a life protected.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600">
          What makes <span className="text-cyan-600">Jeevan-Setu</span> different
          from traditional record systems.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            {/* <span className="text-3xl">⚡</span> */}
            <h3 className="mt-2 text-xl font-semibold text-cyan-600">Instant Access</h3>
            <p className="text-gray-600 mt-2">
              Doctors and responders can quickly scan the QR code to access
              critical details.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            {/* <span className="text-3xl"></span> */}
            <h3 className="mt-2 text-xl font-semibold text-cyan-600">Secure & Private</h3>
            <p className="text-gray-600 mt-2">
              Sensitive health data is stored safely, while the QR code only
              contains a unique ID.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            {/* <span className="text-3xl"></span> */}
            <h3 className="mt-2 text-xl font-semibold text-cyan-600">Emergency Ready</h3>
            <p className="text-gray-600 mt-2">
              Family contacts and medical alerts are always available instantly
              during emergencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
