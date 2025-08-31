import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-md border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-green-700">
          ClubPortal
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-green-700">
          {["Home", "About", "Events", "Results"].map((item) => (
            <motion.li
              key={item}
              className="relative group"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="hover:text-green-500 transition"
              >
                {item}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <HiX className="w-8 h-8 text-green-700" />
            ) : (
              <HiMenu className="w-8 h-8 text-green-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-white/30 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <motion.ul className="flex flex-col gap-4 p-6 font-semibold text-green-700">
              {["Home", "About", "Events", "Results"].map((item) => (
                <motion.li
                  key={item}
                  variants={mobileLinkVariants}
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="block hover:text-green-500 transition"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
