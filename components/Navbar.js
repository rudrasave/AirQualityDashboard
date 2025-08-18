import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🌍</span>
          <Link to="/" className="font-semibold text-lg">
            Air Quality Dashboard
          </Link>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/analytics" className="hover:underline">Analytics</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-blue-600/95 px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link onClick={() => setOpen(false)} to="/" className="py-2">Home</Link>
            <Link onClick={() => setOpen(false)} to="/analytics" className="py-2">Analytics</Link>
            <Link onClick={() => setOpen(false)} to="/about" className="py-2">About</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
