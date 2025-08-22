import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const medicalHistory = [
    {
      reason: "Fever & Weakness",
      date: "2025-08-10",
      summary: "Patient had high fever for 3 days. Prescribed antibiotics and hydration.",
      doctor: "Dr. Ramesh Kumar",
    },
    {
      reason: "Routine Checkup",
      date: "2025-06-22",
      summary: "General health checkup. All vitals normal.",
      doctor: "Dr. Sneha Sharma",
    },
    {
      reason: "Back Pain",
      date: "2025-05-12",
      summary: "Mild lower back pain. Physiotherapy recommended.",
      doctor: "Dr. Anil Mehta",
    },
    {
      reason: "Chest Pain",
      date: "2025-04-05",
      summary: "Complained of chest discomfort. ECG and blood test performed. No major issues.",
      doctor: "Dr. Kavita Nair",
    },
    {
      reason: "Skin Allergy",
      date: "2025-03-15",
      summary: "Itching and rashes on arms. Prescribed antihistamines and ointment.",
      doctor: "Dr. Pooja Verma",
    },
    {
      reason: "Headache & Stress",
      date: "2025-02-02",
      summary: "Patient reported frequent headaches due to stress. Recommended rest and lifestyle changes.",
      doctor: "Dr. Amit Desai",
    },
    {
      reason: "Dental Checkup",
      date: "2025-01-10",
      summary: "Routine dental cleaning. Found early signs of cavity in molar.",
      doctor: "Dr. Ritu Malhotra",
    },
    {
      reason: "Eye Checkup",
      date: "2024-12-15",
      summary: "Complained of blurry vision. Prescribed new glasses.",
      doctor: "Dr. Arvind Gupta",
    },
    {
      reason: "Covid Follow-up",
      date: "2024-11-20",
      summary: "Post-Covid recovery check. Patient stable, advised breathing exercises.",
      doctor: "Dr. Neha Kapoor",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200 relative overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto py-14 px-6 space-y-12 relative z-10">
        {/* -------- User Info Section -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition"
        >
          {/* Profile Photo with floating effect */}
          <motion.img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Patient Profile</h2>
            <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
              <div className="bg-blue-50 px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold">Name:</span> Nishanth
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold">Age:</span> 25
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold">Blood Group:</span> B+
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold">Height:</span> 175 cm
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-lg shadow-sm">
                <span className="font-semibold">Weight:</span> 70 kg
              </div>
            </div>
          </div>
        </motion.div>

        {/* -------- Medical History Section -------- */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-gray-800 text-center md:text-left"
        >
          Medical History
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicalHistory.map((visit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-white/95 backdrop-blur-sm border border-blue-100 shadow-md rounded-xl p-5 hover:shadow-2xl hover:border-blue-400 transition"
            >
              <h4 className="text-lg font-semibold text-blue-600 mb-1">
                {visit.reason}
              </h4>
              <p className="text-xs text-gray-500 mb-2">📅 {visit.date}</p>
              <p className="text-sm text-gray-700 mb-3">{visit.summary}</p>
              <p className="text-xs font-medium text-gray-600">
                👨‍⚕️ {visit.doctor}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
