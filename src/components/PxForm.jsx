import React, { useState } from "react";
import { toast } from "react-toastify";
// Keep Firestore to save the text data and file URLs
import { db } from "../authentication/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function PxForm() {
  // --- Add your Cloudinary details here ---
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const [form, setForm] = useState({
    doctorName: "",
    note: "",
    prescriptionFile: null,
    reportsFile: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.doctorName) {
      return toast.error("Doctor name is required.");
    }
    setIsLoading(true);

    try {
      // 1. UPLOAD FILES to Cloudinary (if they exist)
      const uploadFile = async (file) => {
        if (!file) return null;
        
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        return data.secure_url; // Return the public URL of the uploaded file
      };

      const prescriptionUrl = await uploadFile(form.prescriptionFile);
      const reportsUrl = await uploadFile(form.reportsFile);

      // 2. SAVE FORM DATA (including Cloudinary URLs) to Firestore
      const docRef = await addDoc(collection(db, "prescriptions"), {
        doctorName: form.doctorName,
        note: form.note,
        prescriptionUrl: prescriptionUrl,
        reportsUrl: reportsUrl,
        createdAt: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id);
      toast.success("Prescription submitted successfully!");

      // 3. Clear the form
      setForm({ doctorName: "", note: "", prescriptionFile: null, reportsFile: null });
      e.target.reset();

    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // The JSX for the return() statement remains exactly the same.
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
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}