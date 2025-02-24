import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Model from "./Model";
import { Button } from "../components/ui/button";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000); // Simulate loading time
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black" id="hero">
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
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-[300px]:px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Glowing Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-9xl font-black mb-4 max-[300px]:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-400 relative"
        >
          <span className="text-shadow-lg shadow-blue-500/30">John Wesley</span>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-purple-400 blur-2xl opacity-30 -z-10" />
        </motion.h1>

        {/* Holographic Typewriter */}
        <motion.div
          className="text-[clamp(1.1rem,4vw,1.5rem)] md:text-4xl font-medium mb-8 max-[300px]:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-purple-300 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200/30 to-purple-300/30 blur-xl -z-10" />
          <Typewriter
            words={["Full-Stack Developer", "UI/UX Designer"]}
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
          className="backdrop-blur-lg rounded-2xl p-6 max-[300px]:p-4 border border-white/10 shadow-2xl shadow-sky-900/30 mb-8 max-[300px]:mb-4 mx-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-[clamp(0.9rem,3vw,1.25rem)] md:text-2xl text-gray-200 max-w-3xl leading-relaxed max-[300px]:leading-snug">
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
          className="flex flex-col max-[400px]:gap-3 xs:flex-row flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <a href="#projects" className="w-full xs:w-auto">
            <Button className="h-12 max-[300px]:h-10 px-6 max-[300px]:px-4 text-sm max-[300px]:text-xs md:text-lg bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 border-2 border-sky-400/30 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore Work</span>
                <span className="text-xl animate-pulse">✨</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </a>

          <a href="#contact" className="w-full xs:w-auto">
            <Button className="h-12 max-[300px]:h-10 px-6 max-[300px]:px-4 text-sm max-[300px]:text-xs md:text-lg bg-transparent hover:bg-white/5 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-sky-400/30 hover:border-sky-300/50 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span>Start Conversation</span>
                <span className="text-xl animate-bounce">💬</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </a>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 max-[400px]:bottom-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <div className="relative w-8 h-16 max-[300px]:h-12 rounded-3xl border-2 border-sky-400/50 flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-sky-400 rounded-full absolute top-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
