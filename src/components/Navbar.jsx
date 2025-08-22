import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; 
import { useAuth } from "../components/AuthProvider.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../authentication/firebase";
import Loader from "./Loader.jsx";
import { useState } from "react";

export default function Navbar() {
  const { currentUser } = useAuth();
  const { userProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Sign out error", error));
  };
  return (
    <nav className="bg-gradient-to-r from-white to-cyan-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your logo */}
          <div className="text-cyan-600 font-bold text-xl">
            SAMPLE
          </div>
        </div>
        
        <div className="">
        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li>
            <NavLink
              to="/"
              
              className={({ isActive }) =>
               isActive ? "text-cyan-600" : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              }

            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" 
            className={({ isActive }) =>
              isActive ? "text-cyan-600" : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
            }>
              About
            </NavLink>
          </li>
          </ul>
          </div>

          <div>
          <ul className="flex space-x-6 text-gray-600 font-medium">
          {currentUser ? (
            <>
              <li className="font-semibold text-gray-700">
                <span>Welcome, {userProfile?.name || currentUser.email}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            // If user is NOT logged in, show login and signup buttons
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-cyan-600 transition-colors duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="hover:text-cyan-600 transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
        </div>
      </div>
    </nav>
  );
}
