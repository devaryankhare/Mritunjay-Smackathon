import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import initialized Firebase instances
import { auth, db } from "../authentication/firebase";

// Import required Firebase Auth functions
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Firestore helpers
import { doc, setDoc } from "firebase/firestore";

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email/Password signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          createdAt: new Date(),
        });
        toast.success("Account created successfully!", { position: "top-center" });
        navigate("/");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "top-center" });
    }
  };

  // Google OAuth signup
  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          createdAt: new Date(),
        });
        toast.success("Signed up with Google!", { position: "top-center" });
        navigate("/");
      }
    } catch (error) {
      toast.error(`Google Sign Up Error: ${error.message}`, { position: "top-center" });
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - branding */}
      <div
        id="img"
        className="hidden md:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 items-center justify-center text-white p-10"
      >
        {/* Blobs */}
        <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 bottom-0 right-0 animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 max-w-md text-center">
          <h1 className="text-4xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Join Our Community 🚀
          </h1>
          <p className="text-lg opacity-90">
            Sign up and explore amazing features crafted just for you.  
            Grow, connect, and build something great!
          </p>
        </div>
      </div>

      {/* Right side - form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">or</p>

            {/* Google Sign Up Button Container */}
            <button
              onClick={handleGoogleSignUp}
              className="w-full py-3 px-4 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm relative flex items-center"
            >
              {/* Google Icon - Leftmost */}
              <img 
                src="src/assets/images/google.png" 
                alt="Google" 
                className="w-6 h-6 flex-shrink-0 hover:scale-110 transition-transform duration-200"
              />
              
              {/* Text - Centered */}
              <span className="flex-1 text-center text-gray-700 font-medium">
                Sign Up with Google
              </span>
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}