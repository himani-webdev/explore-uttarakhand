import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./components/Destinations";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;