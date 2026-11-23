import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-full relative z-50 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto min-h-20 px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-[#243D35] tracking-wide"
          style={{ marginLeft: "8px"}}
        >
          EXPLORE<span className="text-[#C49A6C]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700 text-base lg:text-lg font-semibold">

          <Link to="/" className="hover:text-[#C49A6C] transition">
            Home
          </Link>

          <Link to="/destinations" className="hover:text-[#C49A6C] transition">
            Destinations
          </Link>

          <Link to="/about" className="hover:text-[#C49A6C] transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-[#C49A6C] transition">
            Contact
          </Link>

        </div>

        {/* Desktop Button */}
        <Link
          to="/destinations"
          className="hidden md:inline-flex items-center bg-[#243D35] text-white px-5 lg:px-7 py-3 rounded-full font-semibold text-sm lg:text-base tracking-wide border border-[#C49A6C]/50 shadow-md hover:bg-[#C49A6C] hover:text-[#243D35] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          Explore Now <span className="ml-2">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#243D35] focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
       <div className="absolute top-full left-0 right-0 w-full max-w-full md:hidden bg-white shadow-lg border-t border-gray-100">

          <div className="flex flex-col px-6 py-5 gap-5 text-gray-700 font-semibold">

            <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-[#C49A6C]">
              Home
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/destinations" className="hover:text-[#C49A6C]">
              Destinations
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/about" className="hover:text-[#C49A6C]">
              About
            </Link>

            <Link onClick={() => setMenuOpen(false)} to="/contact" className="hover:text-[#C49A6C]">
              Contact
            </Link>

            <Link
              onClick={() => setMenuOpen(false)}
              to="/destinations"
              className="bg-[#243D35] text-white text-center px-6 py-3 rounded-full hover:bg-[#C49A6C] hover:text-[#243D35] transition"
            >
              Explore Now →
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;