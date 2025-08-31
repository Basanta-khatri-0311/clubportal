import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {/* Logo / About */}
        <div>
          <h1 className="text-2xl font-bold text-green-400 mb-2">ClubPortal</h1>
          <p className="text-gray-400">
            Bringing together passionate members to learn, compete, and celebrate achievements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400 transition">About</Link></li>
            <li><Link to="/events" className="hover:text-green-400 transition">Events</Link></li>
            <li><Link to="/results" className="hover:text-green-400 transition">Results</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ClubPortal. All rights reserved.

      </div>
    </footer>
  );
}
