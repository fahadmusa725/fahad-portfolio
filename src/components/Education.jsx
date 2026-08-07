import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Highly Diploma in Software Engineering",
    institute: "Aptech Institute",
    duration: "2024 - Present",
    description:
      "Studying Software Engineering with a focus on Web Development, Object-Oriented Programming, Database Systems, Software Design and Full Stack Development.",
  },

  {
    degree: "Intermediate (Commerce)",
    College: "Siraj-ud-Daulah Govt. College",
    duration: "2021 - 2023",
    description:
      "Completed Intermediate education with a Commerce background.",
  },

  {
    degree: "Matriculation (Computer Science)",
    School: "J.M.A Boys and Girls School",
    duration: "2019 - 2021",
    description:
      "Completed Secondary School Education with strong academic performance.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 py-24 px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            My academic background and learning journey in Software Engineering.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center text-slate-900">
                  <FaGraduationCap size={24} />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <h4 className="text-cyan-400 mt-2">
                    {item.institute}
                  </h4>

                  <p className="text-slate-500 mt-1">
                    {item.duration}
                  </p>

                  <p className="text-slate-400 leading-7 mt-4">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;