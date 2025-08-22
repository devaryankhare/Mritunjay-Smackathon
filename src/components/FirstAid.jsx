import React from "react";

export default function FirstAid() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-400 text-white p-6 rounded-2xl shadow-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold">Health Record</h1>
      </header>

      {/* Personal Details Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
          Personal & Emergency Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Patient Details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col gap-2">
            <h3 className="font-bold text-gray-700">Patient</h3>
            <p className="text-gray-600">Name: <span className="font-medium">John Doe</span></p>
            <p className="text-gray-600">Age: <span className="font-medium">34</span></p>
            <p className="text-gray-600">Blood Group: <span className="font-medium text-red-600">O+</span></p>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-gray-700">Emergency Contacts</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-gray-700">
                Father: <span className="font-medium">Mr. David Doe</span> —{" "}
                <span className="text-blue-600">+91 98765 43210</span>
              </li>
              <li className="text-gray-700">
                Wife: <span className="font-medium">Mrs. Jane Doe</span> —{" "}
                <span className="text-blue-600">+91 87654 32109</span>
              </li>
              <li className="text-gray-700">
                Son: <span className="font-medium">Alex Doe</span> —{" "}
                <span className="text-blue-600">+91 76543 21098</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Remedies / Medicines Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-3">
          Remedies / Medicines
        </h2>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <ul className="mt-3 list-disc list-inside text-green-600 space-y-1">
            <li>Antihistamines (Cetirizine, Loratadine)</li>
            <li>EpiPen (for severe peanut allergy)</li>
            <li>Inhaler (for dust-related breathing issues)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
