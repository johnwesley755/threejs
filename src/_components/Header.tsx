import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import gsap from "gsap";
import Loader from "../_components/Loader"; // Importing the Loader component

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (navRef.current) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - Hide navbar
          navRef.current.style.transform = "translateY(-100%)";
        } else {
          // Scrolling up - Show navbar
          navRef.current.style.transform = "translateY(0)";
        }
      }

      lastScrollY = currentScrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    setTimeout(() => setIsLoading(false), 2000); // Simulating a loading delay
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {isLoading && <Loader />} {/* Display loader while loading */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
        id="home"
        style={{
          transform: "translateY(0)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white">
            John Wesley<span className="text-purple-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition text-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Sidebar for Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent ref={sidebarRef} className="bg-black text-white w-64">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Menu</h2>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-lg hover:text-purple-500 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Header;
