import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside menu AND outside button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="w-full mx-auto px-6 flex justify-between items-center h-16 bg-white/20 backdrop-blur-md shadow-md">
        <h1 className="font-bold text-xl text-green-700">Sangar Samuha</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#members" onClick={handleLinkClick} className="hover:text-green-700 transition">Members</a>
          <a href="#matches" onClick={handleLinkClick} className="hover:text-green-700 transition">Matches</a>
          <a href="#programs" onClick={handleLinkClick} className="hover:text-green-700 transition">Programs</a>
          <a href="#register" onClick={handleLinkClick} className="hover:text-green-700 transition">Register</a>
          <Link to="/admin-login" onClick={handleLinkClick} className="hover:text-green-700 transition">Admin</Link>
        </div>

        {/* Mobile Hamburger */}
        <button ref={buttonRef} className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="absolute top-full left-0 w-full flex flex-col items-center space-y-4 bg-white/20 backdrop-blur-xl shadow-md z-40 py-6">
          <a href="#members" onClick={handleLinkClick} className="text-xl hover:text-green-700 transition">Members</a>
          <a href="#matches" onClick={handleLinkClick} className="text-xl hover:text-green-700 transition">Matches</a>
          <a href="#programs" onClick={handleLinkClick} className="text-xl hover:text-green-700 transition">Programs</a>
          <a href="#register" onClick={handleLinkClick} className="text-xl hover:text-green-700 transition">Register</a>
          <Link to="/admin-login" onClick={handleLinkClick} className="text-xl hover:text-green-700 transition">Admin</Link>
        </div>
      )}
    </nav>
  );
}
