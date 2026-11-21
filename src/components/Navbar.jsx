import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-10 bg-white shadow-sm px-6 md:px-16 py-5">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#243D35]"  style={{ marginLeft: "9px" }}>
          EXPLORE<span className="text-[#C49A6C]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 text-lg font-bold">

          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* Desktop Button */}
        <Link
            to="/destinations"
            className="hidden md:block bg-[#243D35] text-white px-12 py-8 rounded-full font-semibold
             text-lg tracking-wide border border-[#C49A6C]/50 shadow-md hover:bg-[#dda972] hover:text-[#0b271e] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ marginLeft: "20px", marginTop: "5px" }}
            >
            Explore Now <span className="ml-2">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#243D35]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 pt-6 pb-3 text-gray-700 font-medium" >

          <Link onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/destinations">
            Destinations
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/about">
            About
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/contact">
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;