import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../components/AuthProvider.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../authentication/firebase";
import Loader from "./Loader.jsx";

export default function Navbar() {
  const { currentUser } = useAuth();
  const { userProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Loader timeout
  setTimeout(() => {
    setLoading(false);
  }, 5000);

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
          <div className="text-cyan-600 font-bold text-xl">JEEVAN-SETU</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
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
            {/* <li>
              <NavLink
                to="/seereports"
                className={({ isActive }) =>
                  isActive ? "text-cyan-600" : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                See Reports
              </NavLink>
            </li> */}
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
        </ul>

        {/* User Info / Auth Buttons */}
        <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-600 font-medium"
                    : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/first-aid"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-600 font-medium"
                    : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                First-Aid
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addprescription"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-600 font-medium"
                    : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                Add Prescription
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-600 font-medium"
                    : "text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                About
              </NavLink>
            </li>

            {/* Mobile Auth Buttons */}
            {currentUser ? (
              <>
                <li className="font-semibold text-gray-700">
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
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-cyan-600 transition-colors duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-cyan-600 transition-colors duration-300"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
