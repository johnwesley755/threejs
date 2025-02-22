import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Model from "./Model";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <motion.div
          className="absolute w-[200%] h-[200%] bg-gradient-to-r from- via-purple-500/20 to-pink-400/20"
          animate={{
            x: ["-50%", "-150%"],
            y: ["-50%", "-150%"],
            rotate: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 z-1 opacity-30">
        <Canvas>
          <Stars
            radius={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={2}
          />
        </Canvas>
      </div>

      {/* Enhanced 3D Scene */}
      <div className="absolute inset-0 z-2">
        <Canvas>
          <ambientLight intensity={2.5} color="white" />
          <pointLight position={[10, 10, 10]} intensity={3} color="white" />
          <Model />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.5}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars
            radius={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={2}
          />
        </Canvas>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Glowing Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-7xl md:text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-400 relative"
        >
          <span className="text-shadow-lg shadow-blue-500/30">John Wesley</span>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-purple-400 blur-2xl opacity-30 -z-10" />
        </motion.h1>

        {/* Holographic Typewriter */}
        <motion.div
          className="text-3xl md:text-4xl font-medium mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-purple-300 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200/30 to-purple-300/30 blur-xl -z-10" />
          <Typewriter
            words={[
              "Full-Stack Architect",
              "3D Web Specialist",
              "UI/UX Innovator",
              "Cloud Native Developer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.div>

        {/* Glassmorphism Card */}
        <motion.div
          className="backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl shadow-sky-900/30 mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Engineering{" "}
            <span className="text-sky-300 font-bold">scalable solutions</span>{" "}
            with modern stacks including{" "}
            <span className="text-purple-300">React</span>,{" "}
            <span className="text-pink-300">Three.js</span>, and{" "}
            <span className="text-sky-300">Cloud Native</span> architectures.
            Transforming complex challenges into{" "}
            <span className="underline decoration-purple-400">
              elegant digital experiences
            </span>
            .
          </p>
        </motion.div>

        {/* Hover-Interactive Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <a href="#projects">
            <Button className="h-16 px-10 bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 border-2 border-sky-400/30 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-3">
                <span>Explore Work</span>
                <span className="text-xl animate-pulse">✨</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </a>

          <a href="#contact">
            <Button className="h-16 px-10 bg-transparent hover:bg-white/5 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-sky-400/30 hover:border-sky-300/50 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-3">
                <span>Start Conversation</span>
                <span className="text-xl animate-bounce">💬</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </a>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <div className="relative w-12 h-20 rounded-3xl border-2 border-sky-400/50 flex justify-center">
            <motion.div
              className="w-2 h-2 bg-sky-400 rounded-full absolute top-2"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
