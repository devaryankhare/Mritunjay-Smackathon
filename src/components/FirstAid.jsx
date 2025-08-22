import React from "react";

export default function FirstAid() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-200 text-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold"> Health Record</h1>
        
      </header>

      {/* Personal Details Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
           Personal & Emergency Details
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-gray-700">Patient</h3>
            <p>Name: John Doe</p>
            <p>Age: 34</p>
            <p>Blood Group: O+</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-gray-700">Emergency Contacts</h3>
            <ul className="list-disc list-inside text-blue-600">
              <li>Father: Mr. David Doe :  +91 98765 43210</li>
              <li>Wife: Mrs. Jane Doe:   +91 87654 32109</li>
              <li>Son: Alex Doe :  +91 76543 21098</li>
            </ul>
          </div>
        </div>
      </section>

      {/* First Aid Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
           Basic First Aid & Allergies
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-gray-700">Allergies</h3>
            <ul className="list-disc list-inside text-red-600">
              <li>Peanuts</li>
              <li>Penicillin</li>
              <li>Dust</li>
            </ul>
          </div> */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold text-gray-700">Remedies / Medicines</h3>
            <ul className="list-disc list-inside text-green-600">
              <li>Antihistamines (Cetirizine, Loratadine)</li>
              <li>EpiPen (for severe peanut allergy)</li>
              <li>Inhaler (for dust-related breathing issues)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
