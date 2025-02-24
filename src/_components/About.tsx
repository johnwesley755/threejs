import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Model2 from "./Model2";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-4 xs:px-6 md:px-16 py-12 md:py-24 gap-6 md:gap-20 overflow-hidden"
      id="about"
    >
      {/* Left Side: About Content */}
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl xs:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        <motion.p
          ref={textRef}
          className="mt-4 xs:mt-6 text-base xs:text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          Hi! I'm John Wesley, a passionate{" "}
          <span className="text-blue-500 font-semibold">
            Frontend Developer
          </span>{" "}
          and{" "}
          <span className="text-pink-500 font-semibold">UI/UX Designer</span>{" "}
          who loves creating beautiful, interactive, and functional web
          applications. With expertise in modern web technologies like{" "}
          <span className="text-purple-500 font-semibold">
            React, Three.js, and GSAP
          </span>
          , I strive to craft engaging digital experiences that blend creativity
          with seamless user interactions.
        </motion.p>

        <motion.p className="mt-4 text-base xs:text-lg md:text-xl text-gray-600 leading-relaxed">
          My journey in web development began with a deep curiosity about how
          websites work, and over the years, I have honed my skills in
          JavaScript frameworks, performance optimization, and responsive
          design. I love collaborating on projects that push the boundaries of
          web technology and bring ideas to life.
        </motion.p>

        <motion.p className="mt-4 text-base xs:text-lg md:text-xl text-gray-600 leading-relaxed">
          When I'm not coding, you’ll find me exploring the latest trends in AI,
          contributing to open-source projects, or brainstorming innovative
          solutions to everyday problems. I am always open to learning,
          collaborating, and growing as a developer.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="mt-8 xs:mt-10 flex flex-wrap justify-center md:justify-start gap-3 xs:gap-4 md:gap-6">
          <a
            href="#projects"
            className="px-4 py-2 xs:px-6 xs:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm xs:text-base font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Projects �
          </a>
          <a
            href="#contact"
            className="px-4 py-2 xs:px-6 xs:py-3 border border-gray-700 text-gray-900 text-sm xs:text-base font-semibold rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-transform duration-300"
          >
            Contact 📩
          </a>
          <a
            href="/src/assets/resume (3).pdf"
            download
            className="px-4 py-2 xs:px-6 xs:py-3 bg-blue-600 text-white text-sm xs:text-base font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Resume 📄
          </a>
        </div>
      </div>

      {/* Right Side: 3D Model */}
      <div className="relative w-full md:w-[45%] h-[40vh] min-h-[300px] xs:h-[50vh] md:h-[70vh] flex justify-center items-center mb-60">
        <div className="w-full h-full max-w-[400px] md:max-w-none">
          <Model2 className="w-full h-full scale-[0.7] xs:scale-90 md:scale-100" />
        </div>
      </div>
    </section>
  );
};

export default About;
