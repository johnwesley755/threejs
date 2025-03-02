import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiFirebase,
  SiVite,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import Model3 from "../_components/Model3"; // 3D Model Component

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-[#ffd43b]" /> },
      { name: "C", icon: <SiC className="text-[#00599c]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#e34f26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572b6]" /> },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: <SiReact className="text-[#61dafb]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38bdf8]" />,
      },
      { name: "Material UI", icon: <SiMui className="text-[#007fff]" /> },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Firebase", icon: <SiFirebase className="text-[#ffca28]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#68a063]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGit className="text-[#f34f29]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-[#646cff]" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="relative py-24 px-6 md:px-10 text-white max-w-7xl mx-auto overflow-hidden">
      {/* Background 3D Model (Centered) */}
      <div className="absolute inset-0 flex justify-center items-center opacity-40 z-0">
        <Model3 />
      </div>

      {/* Content Section */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-pink-600 drop-shadow-lg">
          My Tech Stack 🚀
        </h2>
        <p className="text-center text-gray-300 mb-16 text-lg">
          The technologies and tools I use to build innovative solutions.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-300 border-b border-gray-700 pb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {skill.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.7)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 bg-gray-900/70 py-4 px-6 rounded-xl shadow-xl border border-gray-800 hover:border-cyan-400 transition-all backdrop-blur-md"
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-lg font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
