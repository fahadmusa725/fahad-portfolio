import { motion } from "framer-motion";

const experiences = [
  {
    company: "Personal Web Development Projects",
    duration: "Aug 2024 - Present",
    location: "Remote - Practice Based",
    description: [
      "Developed websites using HTML, CSS, JavaScript and basic PHP. ",
      "Worked on individual and team-based projects, creating responsive layouts and basic interactivity.",
      "Deployed projects online using Netlify.",
    ],
  },
  {
    company: "Call Center",
    duration: "Aug 2024 - Present",
    location: "Sales Agent (Chat-Based)",
    description: [
      "Worked as a Chat-Based sales agent using Facebook Messenger. ",
      "Handled customer queries through written communication. ",
      "Developed strong communication, time management and teamwork skills.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 px-6 lg:px-10"
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
            My <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            My journey as a Software Engineering student and Full Stack Developer.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative border-l-2 border-cyan-400 pl-8 space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[42px] top-2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-950"></div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">

                <span className="text-cyan-400 font-semibold">
                  {exp.year}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {exp.title}
                </h3>

                <h4 className="text-slate-300 mt-1">
                  {exp.company}
                </h4>

                <p className="text-slate-400 mt-4 leading-7">
                  {exp.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;