import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import cv from "../assets/images/CV.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "education",
      "contact",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">

        <a
          href="#"
          className="text-3xl font-extrabold tracking-wide text-white"
        >
          Fahad<span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden md:flex gap-8">

          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`duration-300 font-medium ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item}
              </a>
            );
          })}

        </nav>

        <a
          href={cv}
          download
          className="hidden md:block bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-5 py-2 rounded-xl font-semibold duration-300"
        >
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="text-white text-2xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {navLinks.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-4 duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item}
              </a>
            );
          })}

        </div>
      )}
    </header>
  );
};

export default Navbar;