import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { motion } from "framer-motion";
import screenshotImg from "../assets/screenshot.png";
import vutoriaImg from "../assets/vutoria(1).png";
import sidegigImg from "../assets/side-gig.png";
import soulsborneImg from "../assets/soulsborne(1).png";
import gramPanchayatImg from "../assets/gram-web.png";
import nammaIsaiImg from "../assets/music-player.png";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
const projects = [
  {
    title: "AI-powered instant video generation",
    date: "Jan 2024",
    description:
      "AI-powered instant video generation with a simple prompt input. Optimized for all devices with a smooth and intuitive user experience.",
    technologies: ["Python", "Flask", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/johnwesley755/ai-shorts-video",
    image: screenshotImg,
  },
  {
    title: "Soulsborne Guide – Community Wiki for Soulslike Game",
    date: "Nov 2024",
    description:
      "Soulsborne is a platform I developed to help individuals conquer procrastination, sharpen their skills, and excel in personal and professional growth by embracing challenges and pushing through barriers, inspired by the spirit of Soulsborne games.",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/johnwesley755/Soulsborne",
    demo: "https://soulsborne-261a4.web.app/",
    image: soulsborneImg,
  },
  {
    title: "Vutoria – AI-Driven Virtual Try-On Platform",
    date: "Oct 2024",
    description:
      "Created an e-commerce platform with a unique virtual try-on feature powered by AI diffusion models. Integrated with a responsive UI to offer users an immersive shopping experience.",
    technologies: ["React", "Tailwind CSS", "AI Diffusion Models"],
    github: "https://github.com/johnwesley755/vutoria-demo-store",
    demo: "https://vutoria-bb1e7.web.app/",
    image: vutoriaImg,
  },
  {
    title: "SideGig App – Freelance and Gig Worker Platform",
    date: "Sep 2024",
    description:
      "Designed and developed a platform for freelancers and gig workers to find and apply for jobs. Features included skill matching, secure messaging, customer feedback, and privacy options.",
    technologies: ["React", "Firebase", "CSS"],
    github: "https://github.com/johnwesley755/sidegig",
    demo: "https://side-gig-website.web.app/",
    image: sidegigImg,
  },
  {
    title: "Gram Panchayat Website",
    date: "Aug 2024",
    description:
      "Developed a community-focused website for managing ward details, applications for electricity and water connections, ward expenses, notifications, and user complaints. Incorporated Firebase for authentication and real-time data handling.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/johnwesley755/gram-panchayat",
    image: gramPanchayatImg,
  },
  {
    title: "Namma Isai – A Music Player Web Application",
    date: "Jul 2024",
    description:
      "Designed and developed a fully functional music player with an intuitive interface, featuring play/pause functionality, volume control, progress tracking, and playlist management using local storage. Ensured a responsive design to provide seamless usability across devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/johnwesley755/namma-isai-music",
    image: nammaIsaiImg,
  },
];

const Project = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white py-16 px-6 overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 "
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-40 h-40 bg-purple-500 rounded-full opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-48 h-48 bg-pink-400 rounded-full opacity-20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-600 mt-2 max-w-lg mx-auto">
          Explore some of the exciting projects I've worked on, combining
          creativity and technology.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-lg text-gray-900 border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <CardTitle className="text-lg font-semibold mt-3">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="mt-3 flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-blue-500 hover:underline flex items-center gap-1"
                    >
                      <span>GitHub</span> 🚀
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-green-500 hover:underline flex items-center gap-1"
                    >
                      <span>Demo</span> 🎨
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
