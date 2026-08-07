import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import hero from "../assets/images/hero.png";
import cv from "../assets/images/CV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-24"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="mt-16 md:mt-6 lg:mt-0 mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm sm:text-base font-medium">
              👋 Welcome To My Portfolio
            </span>
          </div>

          <h2 className="text-2xl text-slate-300 mb-3">
            Hello, I'm
          </h2>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
            Fahad
            <span className="text-cyan-400"> Musa</span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mt-6 h-16">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1800,
                "React Developer",
                1800,
                "MERN Stack Developer",
                1800,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            Passionate Frontend & MERN Stack Developer focused on
            building beautiful, responsive and high-performance web
            applications using React, JavaScript, Node.js,
            Express.js and MongoDB.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href={cv}
              download
              className="bg-cyan-400 text-slate-900 px-7 py-4 rounded-xl font-semibold hover:scale-105 duration-300"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="border border-cyan-400 text-cyan-400 px-7 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 duration-300 flex items-center gap-2"
            >
              View Projects
              <FaArrowRight />
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="mailto:fahadmusa725@gmail.com"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-slate-900 duration-300"
            >
              <FaEnvelope size={22} />
            </a>

            <a
              href="https://github.com/fahadmusa725"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-slate-900 duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/fahad-musa-ba30ab355"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-slate-900 duration-300"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-25"></div>

            <img
              src={hero}
              alt="Fahad Musa"
              className="relative w-[260px] sm:w-[320px] lg:w-[470px] rounded-full border-4 border-cyan-400 shadow-2xl object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;