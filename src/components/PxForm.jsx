import React, { useState } from "react"; // No need for useEffect anymore
import { toast } from "react-toastify";

export default function PxForm() {
  const LOCAL_STORAGE_KEY = "patientPrescriptionForm";

  // We change useState to no longer load drafts, just start empty.
  const [form, setForm] = useState({
    doctorName: "",
    note: "",
    prescriptionFile: null,
    reportsFile: null,
  });

  // We REMOVE the useEffect hook entirely, as we will now save manually.

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);

    // 1. Manually save the final, correct data to localStorage.
    // We create a version without the file objects for saving.
    const dataToSave = { ...form, prescriptionFile: null, reportsFile: null };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));

    // 2. Now that the data is safely saved, we can clear the form.
    setForm({
      doctorName: "",
      note: "",
      prescriptionFile: null,
      reportsFile: null,
    });
    
    toast.success("Prescription submitted and saved successfully!");
  };

  // The JSX for the return() statement remains exactly the same...
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 transition hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Patient Prescription Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Doctor Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Doctor Name
            </label>
            <input
              type="text"
              name="doctorName"
              value={form.doctorName}
              onChange={handleChange}
              placeholder="Enter doctor's name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none transition"
              required
            />
          </div>

          {/* Prescription File Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Prescription
            </label>
            <input
              type="file"
              name="prescriptionFile"
              onChange={handleChange}
              accept=".pdf,.jpg,.png"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition"
            />
          </div>

          {/* Test Reports File Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Test Reports
            </label>
            <input
              type="file"
              name="reportsFile"
              onChange={handleChange}
              accept=".pdf,.jpg,.png"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600 transition"
            />
          </div>

          {/* Doctor’s Note */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Doctor’s Note
            </label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Enter additional notes"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}