import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import cv from "../assets/images/CV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">

        {/* Logo */}

        <a
          href="#"
          className="text-3xl font-extrabold tracking-wide text-white"
        >
          Fahad<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-8">

          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 duration-300 font-medium"
            >
              {item}
            </a>
          ))}

        </nav>

        {/* Resume */}

        <a
  href={cv}
  download
  className="hidden md:block bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-5 py-2 rounded-xl font-semibold duration-300"
>
  Resume
</a>

        {/* Mobile Icon */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}

        </div>
      )}
    </header>
  );
};

export default Navbar;