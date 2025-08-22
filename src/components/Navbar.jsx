import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../components/AuthProvider.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../authentication/firebase";
import Loader from "./Loader.jsx";

export default function Navbar() {
  const { currentUser, userProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);



  // ESSENTIAL FIX: Loader logic is correctly placed in useEffect to prevent bugs.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);


  if (loading) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Sign out error", error));
  };

  return (
    <nav className="bg-gradient-to-r from-white to-cyan-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <img src="src/assets/images/pharmacy.png" className="h-10 w-10 object-contain ml-2"  alt="logo" />
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo - Kept original styling */}
        <div className="flex items-center space-x-2">
          <div className="text-cyan-600 font-bold text-xl">JEEVAN-SETU</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          {/* LOGIC CHANGE: Conditionally render links based on login status */}
          {currentUser ? (
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Landing"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/first-aid"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                  }
                >
                  First-Aid
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addprescription"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                  }
                >
                  Add Prescription
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-600"
                      : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                  }
                >
                  About
                </NavLink>
              </li>
            </>
          ) : (
            // If logged out, only show Home link as requested (optional, can be removed)
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-600"
                    : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
          )}
        </ul>

        {/* User Info / Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          {/* ESSENTIAL FIX: Correctly structured conditional rendering for auth buttons */}
          {currentUser ? (
            <>
              <span className="font-semibold text-gray-700">
                Welcome, {userProfile?.name || currentUser.email}
              </span>
              <button
                onClick={handleLogout}
                className="hover:text-red-600 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-cyan-600 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-cyan-600 transition-colors duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-2xl">&#10005;</span> // X icon
            ) : (
              <span className="text-2xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>
      </div>
      

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-3">
            {currentUser ? (
              <>
                <li>
                  <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-cyan-600 font-medium" : "text-gray-600 hover:text-cyan-600"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Landing" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-cyan-600 font-medium" : "text-gray-600 hover:text-cyan-600"}>Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/first-aid" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-cyan-600 font-medium" : "text-gray-600 hover:text-cyan-600"}>First-Aid</NavLink>
                </li>
                <li>
                  <NavLink to="/addprescription" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-cyan-600 font-medium" : "text-gray-600 hover:text-cyan-600"}>Add Prescription</NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-cyan-600 font-medium" : "text-gray-600 hover:text-cyan-600"}>About</NavLink>
                </li>
                <li className="pt-2 border-t mt-2 font-semibold text-gray-700">
                  Welcome, {userProfile?.name || currentUser.email}
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="hover:text-red-600 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-cyan-600 font-medium" : "text-gray-600 hover:text-cyan-600"}>Home</NavLink>
                </li>
                <li>
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-cyan-600 transition-colors duration-300">Login</Link>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setMenuOpen(false)} className="hover:text-cyan-600 transition-colors duration-300">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}