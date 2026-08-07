import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJquery,
  SiPhp,
  SiLaravel,
  SiSharp,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={32} />,
    color: "text-orange-500",
    level: 95,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={32} />,
    color: "text-blue-500",
    level: 92,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={32} />,
    color: "text-yellow-400",
    level: 90,
  },
  {
    name: "React",
    icon: <FaReact size={32} />,
    color: "text-cyan-400",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={32} />,
    color: "text-sky-400",
    level: 92,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={32} />,
    color: "text-purple-500",
    level: 90,
  },
  {
    name: "jQuery",
    icon: <SiJquery size={32} />,
    color: "text-blue-500",
    level: 85,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={32} />,
    color: "text-green-500",
    level: 82,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={32} />,
    color: "text-gray-300",
    level: 80,
  },
  {
    name: "PHP",
    icon: <SiPhp size={32} />,
    color: "text-indigo-400",
    level: 80,
  },
  {
    name: "Laravel",
    icon: <SiLaravel size={32} />,
    color: "text-red-500",
    level: 78,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={32} />,
    color: "text-green-400",
    level: 82,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={32} />,
    color: "text-blue-400",
    level: 78,
  },
 {
  name: "SQL Server",
  icon: <FaDatabase size={32} />,
  color: "text-red-600",
  level: 82,
},
  {
    name: "C#",
    icon: <SiSharp size={32} />,
    color: "text-purple-500",
    level: 80,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={32} />,
    color: "text-orange-500",
    level: 88,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={32} />,
    color: "text-white",
    level: 90,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">

                <div className="flex items-center gap-4">
                  <div className={skill.color}>
                    {skill.icon}
                  </div>

                  <h3 className="text-white text-lg font-semibold">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-cyan-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;