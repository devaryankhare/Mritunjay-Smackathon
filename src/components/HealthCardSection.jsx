// HealthCardSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HealthCardSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left: Health Card Preview */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-100 h-72 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 shadow-2xl text-white p-5 flex flex-col justify-between">
            
            {/* Top Section */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold tracking-wide">Jeevan-Setu</h3>
            </div>

            {/* Health ID Number */}
            <div>
              <p className="text-xs opacity-90">Health ID Number</p>
              <p className="text-base font-mono tracking-widest font-semibold">
                1234 5678 9012
              </p>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-2 gap-y-3 mt-2">
              <div>
                <p className="text-xs opacity-90">Name</p>
                <p className="text-sm font-semibold">Rahul Sharma</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Blood Group</p>
                <p className="text-sm font-semibold">B+</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Age</p>
                <p className="text-sm font-semibold">28</p>
              </div>
          
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-end mt-2">
              <div>
                <p className="text-xs opacity-90">Emergency Contact</p>
                <p className="text-sm font-semibold">+91 98765 43210</p>
              </div>
              <div className="bg-white p-1 rounded-lg shadow-md">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=Jeevan-Setu"
                  alt="QR Code"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Service Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-cyan-700 mb-6">
            Your Digital Health Companion
          </h2>
          <p className="text-gray-700 mb-4">
            The Jeevan-Setu Health Card is a <b>smart emergency ID</b> that helps
            doctors and responders access your health details instantly with a
            simple QR scan.
          </p>

          <h3 className="text-xl font-semibold text-cyan-800 mb-3">
            What the Card Contains:
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>12-digit unique Health ID</li>
            <li>Basic details (Name, Age, Blood Group)</li>
            <li>Allergies & medical history</li>
            <li>Emergency contact numbers</li>
            <li>QR code for instant access</li>
          </ul>

          <h3 className="text-xl font-semibold text-cyan-800 mb-3">
            Benefits:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Immediate help in medical emergencies </li>
            <li>Fast decision-making for doctors </li>
            <li>Safe & private storage </li>
            <li>Peace of mind for families </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
