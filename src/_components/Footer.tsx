import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">John Wesley</h2>
            <p className="text-gray-400 text-sm mt-1">
              Aspiring Web Developer & UI/UX Designer
            </p>
          </div>

          {/* Navigation */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/john-wesley-6707ab258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/JohnWesley97513"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:johnwesley8113@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} John Wesley. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
