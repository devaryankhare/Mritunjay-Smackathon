import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Import Firebase auth instance
import { auth } from "../authentication/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Loader from "./Loader";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "email") setEmail(value);
  //   if (name === "password") setPassword(value);
  // };

  // Email/Password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email,password);
      toast.success("Logged in successfully!", { position: "top-center" });
      navigate("/landing");
    } catch (error) {
      toast.error(`Login failed: ${error.message}`, { position: "top-center" });
    }
  };

  // Google OAuth login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!", { position: "top-center" });
      navigate("/landing");
    } catch (error) {
      toast.error(`Google Login Error: ${error.message}`, { position: "top-center" });
    }
  };

  return (
      <div className="flex min-h-screen">
        {/* Left side */}
        <div
          id="img"
          className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-500 to-pink-300 flex flex-col items-center justify-center text-center text-white py-20 px-6"
        >
          {/* Floating blurred circles */}
          <div className="absolute w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 bottom-0 right-0 animate-pulse"></div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Welcome to <span className="text-cyan-400">Jeevan-Setu</span>
            </h1>
            <p className="text-xl text-black opacity-90 mb-6">
              Bridging health, technology, and community – your partner in better living.
            </p>

            {/* Call to Action */}
            {/* <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-100 transition">
              Get Started
            </button> */}
          </div>
        </div>

        {/* Right side - login form */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 p-6">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
                className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Login
              </button>
            </form>
            
            
            <p className="text-center text-sm text-gray-600 mt-4">
              or{" "}
              </p>
              <div className="flex items-center justify-between border-2 border-gray-300 rounded-lg p-4 mt-4 hover:border-purple-400 transition-colors duration-200 cursor-pointer shadow-sm hover:shadow-md">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center w-full focus:outline-none"
                >
                  {/* Google Icon - Left aligned */}
                  <img 
                    src="src/assets/images/google.png" 
                    alt="Google" 
                    className="w-6 h-6 flex-shrink-0 hover:scale-110 transition-transform duration-200"
                  />
                  
                  {/* Text - Centered */}
                  <p className="flex-1 text-center text-gray-700 font-medium text-base">
                    Continue with Google
                  </p>
                  
                  {/* Invisible spacer to balance the layout */}
                  <div className="w-6 h-6 flex-shrink-0"></div>
                </button>
              </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
}
