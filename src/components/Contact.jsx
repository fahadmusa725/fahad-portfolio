import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong!");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to work together?
            Feel free to get in touch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span className="text-slate-300">
                  fahadmusa725@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span className="text-slate-300">
                  +92 331 3687521
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-2xl" />

                <a
                  href="https://github.com/fahadmusa725"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400 duration-300"
                >
                  github.com/fahadmusa725
                </a>

              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-2xl" />

                <a
                  href="https://www.linkedin.com/in/fahad-musa-ba30ab355"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400 duration-300"
                >
                  LinkedIn Profile
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 rounded-xl p-4 text-white border border-slate-700 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 rounded-xl p-4 text-white border border-slate-700 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-slate-800 rounded-xl p-4 text-white border border-slate-700 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-slate-800 rounded-xl p-4 text-white border border-slate-700 outline-none resize-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 text-slate-900 py-4 rounded-xl font-bold hover:bg-cyan-300 duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;