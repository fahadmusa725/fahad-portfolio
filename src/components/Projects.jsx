import { motion } from "framer-motion";

import projectflowImg from "../assets/images/projectflow.webp";
import posImg from "../assets/images/pos.webp";
import dentalImg from "../assets/images/dental.webp";
import detailingImg from "../assets/images/detailing.webp";
import booksyImg from "../assets/images/booksy.webp";
import hmsImg from "../assets/images/hms.webp";

const projects = [
  {
    title: "ProjectFlow: Project Management Tool",
    image: projectflowImg,
    width: 1200,
    height: 750,
    description:
      "A Trello-style project management app with boards, drag and drop tasks, comments, notifications, member-based project access and real-time board sync powered by Ably.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Ably"],
    github: "https://github.com/fahadmusa725/CodeAlpha_ProjectFlow",
    live: "https://fahad-projectflow.vercel.app",
  },

  {
    title: "Hospital Management System: SaaS",
    image: hmsImg,
    width: 1200,
    height: 475,
    description:
      "A full-featured MERN Stack Hospital Management System SaaS designed to support multiple hospitals on a single platform with comprehensive hospital management features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/fahadmusa725/HMS-Project",
    live: "https://hms-project-hhtz.vercel.app",
  },

  {
    title: "DineFlow POS System",
    image: posImg,
    width: 1200,
    height: 635,
    description:
      "A complete MERN Stack Restaurant POS System featuring dashboard, billing, inventory management, authentication and a responsive user interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/fahadmusa725/pos-saas",
    live: "https://pos-saas-topaz.vercel.app",
  },

  {
    title: "Dental Clinic Website",
    image: dentalImg,
    width: 1200,
    height: 584,
    description:
      "A modern responsive dental clinic website featuring services, doctors, appointments, testimonials and a contact section.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/fahadmusa725/Dental-Clinic-Website",
    live: "https://dental-clinic-website-jade-kappa.vercel.app",
  },

  {
    title: "Premium Shine Detailing",
    image: detailingImg,
    width: 1200,
    height: 602,
    description:
      "A professional mobile car detailing website featuring service booking, pricing, gallery and a responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/fahadmusa725/PremiumShineDetailing",
    live: "https://premiumshinedetailing.vercel.app",
  },

  {
    title: "Booksy: Online E-Book & Book Store",
    image: booksyImg,
    width: 1200,
    height: 584,
    description:
      "A complete PHP and MySQL-based online bookstore for selling books in PDF, hard copy and CD formats, with shopping, orders and management features.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/fahadmusa725/Booksy",
    live: "https://booksy.site.je/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my frontend,
            backend and full-stack development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                width={project.width}
                height={project.height}
                loading="lazy"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-cyan-400 text-slate-900 py-3 rounded-xl font-semibold hover:bg-cyan-300 duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-cyan-400 text-cyan-400 py-3 rounded-xl hover:bg-cyan-400 hover:text-slate-900 duration-300"
                  >
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;