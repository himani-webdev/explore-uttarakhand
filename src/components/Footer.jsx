import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-[#243D35] text-white pt-16 pb-8 px-5 sm:px-8 md:px-16"
      style={{ marginTop: "30px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-14">

        {/* Logo */}
        <div className="px-2">
          <h2 className="text-3xl font-bold tracking-wider mb-5 mt-2" style={{ marginLeft: "20px",marginTop: "10px"}}>
            EXPLORE<span className="text-[#C49A6C]" >.</span>
          </h2>

          <p className="text-gray-300 leading-7 max-w-sm" style={{ marginLeft: "20px" }}>
            Discover the hidden beauty of Uttarakhand.
            Explore mountains, rivers and peaceful destinations
            with unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div className="px-2">
          <h3 className="text-xl font-semibold mb-6 mt-2" style={{ marginLeft: "20px" ,marginTop: "10px"}}>
            Quick Links
          </h3>

          <div className="flex flex-col gap-y-2 text-gray-300" style={{ marginLeft: "20px" }}>
            <Link to="/" className="hover:text-[#C49A6C]">Home</Link>
            <Link to="/#destinations" className="hover:text-[#C49A6C]">Destinations</Link>
            <Link to="/about" className="hover:text-[#C49A6C]">About Us</Link>
            <Link to="/contact" className="hover:text-[#C49A6C]">Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-2">
          <h3 className="text-xl font-semibold mb-6 mt-2" style={{ marginLeft: "20px" ,marginTop: "10px"}}>
            Contact Us
          </h3>

          <div className="flex flex-col gap-2 text-gray-300 wrap-break-words" style={{ marginLeft: "20px" }}>
            <p>📍 Uttarakhand, India</p>
            <p>✉️ exploreuttarakhand@gmail.com</p>
            <p>🌐 www.exploreuttarakhand.com</p>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 pt-8 text-center mt-4">

        <p className="text-gray-300 text-sm font-bold" style={{ marginTop: "6px" }}>
          © 2026 Explore Uttarakhand. All Rights Reserved.
        </p>

        <p className="text-[#C49A6C] text-sm mt-3 font-bold" style={{ paddingBottom: "9px" }}>
          Made with ❤️ in Uttarakhand
        </p>

      </div>

    </footer>
  );
}

export default Footer;