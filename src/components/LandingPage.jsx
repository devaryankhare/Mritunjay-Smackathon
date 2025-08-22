import React, { useState, useEffect } from "react"; // Import hooks
import { motion } from "framer-motion";
// --- Import Firestore functions ---
import { db } from "../authentication/firebase"; // Adjust the path to your firebase.js file
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export default function LandingPage() {
  // --- State to hold the fetched medical history ---
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- useEffect to fetch data when the component mounts ---
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Create a query to get documents from the 'prescriptions' collection
        const q = query(collection(db, "prescriptions"), orderBy("createdAt", "desc"));

        const querySnapshot = await getDocs(q);
        const historyData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setMedicalHistory(historyData);
      } catch (error) {
        console.error("Error fetching medical history:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []); // The empty array [] ensures this runs only once on mount

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200 relative overflow-hidden">
      {/* ... your animated background and user info sections remain the same ... */}
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
        {/* -------- User Info Section (no changes) -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition"
        >
          <motion.img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
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

        {/* --- Conditional rendering for loading and empty states --- */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading history...</p>
        ) : medicalHistory.length === 0 ? (
          <p className="text-center text-gray-500">No medical history found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* --- Map over the medicalHistory state variable --- */}
            {medicalHistory.map((visit, index) => (
              <motion.div
                key={visit.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="bg-white/95 backdrop-blur-sm border border-blue-100 shadow-md rounded-xl p-5 hover:shadow-2xl hover:border-blue-400 transition flex flex-col"
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-blue-600 mb-1">
                    Visit with {visit.doctorName}
                  </h4>
                  {/* Format the Firestore timestamp to a readable date */}
                  <p className="text-xs text-gray-500 mb-2">
                    📅 {visit.createdAt?.toDate().toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">{visit.note || "No summary provided."}</p>
                </div>
                {/* --- Add links to view the uploaded files --- */}
                {(visit.prescriptionUrl || visit.reportsUrl) && (
                  <div className="mt-auto pt-3 border-t border-gray-200">
                    <h5 className="text-xs font-bold text-gray-500 mb-2">Attachments</h5>
                    {visit.prescriptionUrl && (
                      <a href={visit.prescriptionUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline block">
                        View Prescription
                      </a>
                    )}
                    {visit.reportsUrl && (
                      <a href={visit.reportsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline block mt-1">
                        View Test Report
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}