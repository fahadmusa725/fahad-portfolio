import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaLaptopCode size={30} />,
      title: "Experience",
      text: "Building modern responsive websites and MERN application.",
    },
    {
      icon: <FaProjectDiagram size={30} />,
      title: "Projects",
      text: "Premium Shine, Dental Clinic, DineFlow POS and more.",
    },
    {
      icon: <FaCode size={30} />,
      title: "Tech Stack",
      text: "React, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS.",
    },
    {
      icon: <FaGraduationCap size={30} />,
      title: "Education",
      text: "Highly Diploma in Software Engineering.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.7}}
          viewport={{once:true}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              MERN Stack & Frontend Developer
            </h3>

            <p className="text-slate-400 leading-8 text-lg">
              I'm Fahad Musa, a passionate Software Engineering student and
              MERN Stack Developer who enjoys creating clean, modern and
              user-friendly web applications. My focus is writing maintainable
              code and building responsive interfaces with React and Tailwind CSS.
            </p>

            <p className="text-slate-400 leading-8 text-lg mt-6">
              I have built multiple real-world projects including a complete
              Restaurant POS System, a Dental Clinic Website and a Premium Shine
              Detailing business website. I enjoy learning new technologies and
              continuously improving my development skills.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-4xl font-bold text-cyan-400">4+</h4>
                <p className="text-slate-300 mt-2">
                  Completed Projects
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h4 className="text-4xl font-bold text-cyan-400">15+</h4>
                <p className="text-slate-300 mt-2">
                  Technologies
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
            className="grid sm:grid-cols-2 gap-6"
          >

            {cards.map((card,index)=>(
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-300"
              >

                <div className="text-cyan-400 mb-5">
                  {card.icon}
                </div>

                <h4 className="text-white text-xl font-semibold mb-3">
                  {card.title}
                </h4>

                <p className="text-slate-400 leading-7">
                  {card.text}
                </p>

              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;