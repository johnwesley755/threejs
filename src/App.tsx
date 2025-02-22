import Hero from "./_components/Hero";
import About from "./_components/About";
import Project from "./_components/Project";
import Contact from "./_components/Contact";
import Header from "./_components/Header";
import Skills from "./_components/Skills";
const App = () => {
  return (
    <div className="relative bg-black text-white">
      <Header />

      {/* Content Overlay */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
