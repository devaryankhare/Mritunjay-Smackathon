// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; 

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-800 text-gray-900 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-semibold mb-4 md:mb-0">
          MyWebsite
        </h1>
        
        {/* Links */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li><Link to="/" className="hover:text-white">Home</Link> </li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/services" className="hover:text-white">Services</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
        
        {/* Copyright */}
        <p className="text-sm text-white">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
