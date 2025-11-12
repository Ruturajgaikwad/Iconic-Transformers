import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'; // <-- Import here

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-accent text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          <div className="text-xl font-bold">Iconic Transformers and Electricals</div>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-grayscale-200 transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-grayscale-200 transition-colors duration-300">About</Link>
          <Link to="/services" className="hover:text-grayscale-200 transition-colors duration-300">Services</Link>
          <Link to="/contact" className="hover:text-grayscale-200 transition-colors duration-300">Contact</Link>
        </div>

        <div className="md:hidden">
          <button 
            aria-label={navOpen ? "Close menu" : "Open menu"} 
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-grayscale-900 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-grayscale-200 transition-colors duration-300">Home</Link>
          <Link to="/about" className="block hover:text-grayscale-200 transition-colors duration-300">About</Link>
          <Link to="/services" className="block hover:text-grayscale-200 transition-colors duration-300">Services</Link>
          <Link to="/contact" className="block hover:text-grayscale-200 transition-colors duration-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
