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
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
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
  SiTypescript,
  SiNextdotjs,
  SiDart,
  SiFlutter,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={28} />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt size={28} />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs size={28} />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript size={28} />, color: "text-blue-400" },
      { name: "React", icon: <FaReact size={28} />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, color: "text-sky-400" },
      { name: "Bootstrap", icon: <FaBootstrap size={28} />, color: "text-purple-500" },
      { name: "jQuery", icon: <SiJquery size={28} />, color: "text-blue-500" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={28} />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress size={28} />, color: "text-gray-300" },
      { name: "PHP", icon: <SiPhp size={28} />, color: "text-indigo-400" },
      { name: "Laravel", icon: <SiLaravel size={28} />, color: "text-red-500" },
      { name: "C#", icon: <SiSharp size={28} />, color: "text-purple-500" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Dart", icon: <SiDart size={28} />, color: "text-cyan-400" },
      { name: "Flutter", icon: <SiFlutter size={28} />, color: "text-sky-400" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={28} />, color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql size={28} />, color: "text-blue-400" },
      { name: "SQL Server", icon: <FaDatabase size={28} />, color: "text-red-600" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={28} />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub size={28} />, color: "text-white" },
      { name: "Microsoft Word", icon: <FaFileWord size={28} />, color: "text-blue-500" },
      { name: "Microsoft Excel", icon: <FaFileExcel size={28} />, color: "text-green-500" },
      { name: "Microsoft PowerPoint", icon: <FaFilePowerpoint size={28} />, color: "text-orange-500" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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

        <div className="space-y-12">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-4">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3 min-w-0 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`${skill.color} shrink-0`}>
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base min-w-0 break-words">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;