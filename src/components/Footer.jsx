import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Fahad<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              MERN Stack & Frontend Developer passionate about building
              modern, responsive and user-friendly web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div className="text-center">

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div className="flex flex-col items-center">

            <h3 className="text-xl font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex items-center justify-center gap-5 mt-5">

              <a
                href="mailto:fahadmusa725@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 duration-300"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/fahadmusa725"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/fahad-musa-ba30ab355"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-400 text-center">
            © {new Date().getFullYear()} Fahad Musa. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;