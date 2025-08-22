import React, { useState, useEffect } from "react";

export default function SeeReports() {
  const LOCAL_STORAGE_KEY = "patientPrescriptionForm";
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setReportData(JSON.parse(savedData));
    }
  }, []); 

  if (!reportData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-600">
          No prescription data found.
        </h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Patient Prescription Details
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-500">Doctor Name</h3>
            <p className="text-xl text-gray-900">{reportData.doctorName}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-500">Doctor's Note</h3>
            <p className="text-xl text-gray-900 whitespace-pre-wrap">
              {reportData.note || "No notes provided."}
            </p>
          </div>
          <p className="pt-4 text-sm text-center text-gray-400">
            Note: For security reasons, uploaded files are not stored locally and cannot be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}